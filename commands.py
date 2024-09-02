import spotipy
from spotipy.oauth2 import SpotifyOAuth

def get_spotify_client(sp_oauth: SpotifyOAuth):
    token_info = sp_oauth.get_cached_token()
    if not token_info or sp_oauth.is_token_expired(token_info):
        return None
    return spotipy.Spotify(auth=token_info['access_token'])
