import spotipy
import config
import random
from spotipy.oauth2 import SpotifyOAuth
from flask import Flask, redirect, request, session, render_template, jsonify
import commands as commands  
import concurrent.futures

app = Flask(__name__)
app.secret_key = config.CLIENT_SECRET
app.config['SESSION_COOKIE_NAME'] = 'spotify-login-session'

sp_oauth = SpotifyOAuth(
    client_id=config.CLIENT_ID,
    client_secret=config.CLIENT_SECRET,
    redirect_uri=config.REDIRECT_URI,
    scope='user-library-read user-read-playback-state user-modify-playback-state user-top-read user-read-currently-playing user-follow-read'
)

def get_token():
    '''Retrieve a valid access token, refresh if necessary.'''
    token_info = session.get('token_info', {})
    if not token_info:
        return None

    token_info = sp_oauth.get_cached_token()
    if not token_info:
        return None

    if sp_oauth.is_token_expired(token_info):
        token_info = sp_oauth.refresh_access_token(token_info['refresh_token'])
        session['token_info'] = token_info

    return token_info['access_token']

def get_all_albums(sp, artist_id):
    albums = []
    results = sp.artist_albums(artist_id, album_type='album,single,compilation', limit=50)
    albums.extend(results['items'])
    while results['next']:
        results = sp.next(results)
        albums.extend(results['items'])
    return albums

def get_tracks_from_albums(sp, albums):
    all_tracks = []
    for album in albums:
        tracks = sp.album_tracks(album['id'])['items']
        all_tracks.extend(tracks)
    return all_tracks

@app.route('/')
def login():
    '''Gives the user an authorization URL to receive an authorization code'''
    session.clear()
    auth_url = sp_oauth.get_authorize_url()
    return redirect(auth_url)

@app.route('/callback')
def callback():
    code = request.args.get('code')
    if not code:
        return "Authorization code not found", 400

    token_info = sp_oauth.get_access_token(code, as_dict=False)
    session['token_info'] = token_info

    sp = commands.get_spotify_client(sp_oauth)
    if not sp:
        return "Spotify authentication failed", 401

    user_info = sp.current_user()
    session['user_profile'] = {
        'display_name': user_info['display_name'],
        'profile_image': user_info['images'][0]['url'] if user_info['images'] else None
    }

    return redirect('/select_artists')

@app.route('/select_artists')
def select_artists():
    selected_artists = session.get('selected_artists', [])
    user_profile = session.get('user_profile', {})
    return render_template('select_artists.html', selected_artists=selected_artists, user_profile=user_profile)

@app.route('/search_artists', methods=['GET'])
def search_artists():
    query = request.args.get('query')
    if not query:
        return {'artists': []}, 200

    token = get_token()
    if not token:
        return {'error': 'Spotify authentication required'}, 401

    sp = spotipy.Spotify(auth=token)
    
    results = sp.search(q=query, type='artist', limit=20)
    artists = results['artists']['items']

    return {'artists': [{'id': artist['id'], 'name': artist['name']} for artist in artists]}

@app.route('/shuffle', methods=['POST'])
def shuffle():
    selected_artist_ids = request.form.getlist('artists')

    if not selected_artist_ids:
        return "<script>alert('Please select at least one artist before shuffling.'); window.history.back();</script>"

    token = get_token()
    if not token:
        return redirect('/')

    sp = spotipy.Spotify(auth=token)
    
    devices = sp.devices()
    if not devices['devices']:
        return jsonify({'error': 'No active devices found. Please open Spotify on one of your devices.'}), 400

    device_id = devices['devices'][0]['id']

    all_tracks = []
    with concurrent.futures.ThreadPoolExecutor(max_workers=10) as executor:
        future_to_artist = {executor.submit(get_all_albums, sp, artist_id): artist_id for artist_id in selected_artist_ids}
        for future in concurrent.futures.as_completed(future_to_artist):
            artist_id = future_to_artist[future]
            try:
                albums = future.result()
                tracks = get_tracks_from_albums(sp, albums)
                all_tracks.extend(tracks)
            except Exception as e:
                print(f"Error retrieving albums or tracks for artist {artist_id}: {e}")

    if all_tracks:
        random.shuffle(all_tracks)
        track_uris = [track['uri'] for track in all_tracks[:min(25, len(all_tracks))]]

        try:
            sp.start_playback(device_id=device_id, uris=track_uris)
           
            is_playing = sp.current_playback()['is_playing']
            return jsonify({'success': True, 'is_playing': is_playing, 'reset_search': True}), 200
        except spotipy.exceptions.SpotifyException as e:
            print(f"Error starting playback: {e}")
            return jsonify({'error': 'Error starting playback'}), 500
    else:
        print("No tracks found for the selected artists.")
        return jsonify({'error': 'No tracks found for the selected artists.'}), 400


@app.route('/current_track')
def current_track():
    token = get_token()
    if not token:
        return {'error': 'User not logged in'}, 401

    sp = spotipy.Spotify(auth=token)
    
    current_track = sp.current_playback()

    if current_track and current_track['item']:
        track_name = current_track['item']['name']
        artist_name = current_track['item']['artists'][0]['name']
        track_url = current_track['item']['external_urls']['spotify']
        album_image_url = current_track['item']['album']['images'][0]['url']
        track_id = current_track['item']['id']
        is_playing = current_track['is_playing']
        return {
            'track_name': track_name,
            'artist_name': artist_name,
            'track_url': track_url,
            'album_image_url': album_image_url,
            'track_id': track_id,
            'is_playing': is_playing,
            'show_controls': True  
        }
    else:
        return {'show_controls': False}  

@app.route('/previous')
def previous_track():
    token = get_token()
    if not token:
        return {'error': 'User not logged in'}, 401

    sp = spotipy.Spotify(auth=token)

    try:
        sp.previous_track()
        return '', 204
    except spotipy.exceptions.SpotifyException as e:
        print(f"Error skipping to previous track: {e}")
        return {'error': 'Failed to skip to previous track'}, 500

@app.route('/next')
def next_track():
    token = get_token()
    if not token:
        return {'error': 'User not logged in'}, 401

    sp = spotipy.Spotify(auth=token)

    try:
        sp.next_track()
        return '', 204
    except spotipy.exceptions.SpotifyException as e:
        print(f"Error skipping to next track: {e}")
        return {'error': 'Failed to skip to next track'}, 500

@app.route('/pause')
def pause_track():
    token = get_token()
    if not token:
        return {'error': 'User not logged in'}, 401

    sp = spotipy.Spotify(auth=token)

    try:
        sp.pause_playback()
        return '', 204
    except spotipy.exceptions.SpotifyException as e:
        print(f"Error pausing playback: {e}")
        return {'error': 'Failed to pause playback'}, 500

@app.route('/play')
def play_track():
    token = get_token()
    if not token:
        return {'error': 'User not logged in'}, 401

    sp = spotipy.Spotify(auth=token)

    try:
        sp.start_playback()
        return '', 204
    except spotipy.exceptions.SpotifyException as e:
        print(f"Error resuming playback: {e}")
        return {'error': 'Failed to resume playback'}, 500
    
@app.route('/top_artists')
def top_artists():
    token = get_token()
    if not token:
        return {'error': 'User not logged in'}, 401

    sp = spotipy.Spotify(auth=token)
    
    results = sp.current_user_top_artists(limit=4, time_range='short_term')
    top_artists = [{'name': artist['name'], 'image': artist['images'][0]['url']} for artist in results['items']]
    
    return jsonify(top_artists)

if __name__ == '__main__':
    app.run(debug=True)
