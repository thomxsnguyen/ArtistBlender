import spotipy
from flask import session
import random

def get_spotify_client(sp_oauth):
    token_info = session.get('token_info', None)
    if not token_info:
        return None

    if sp_oauth.is_token_expired(token_info):
        token_info = sp_oauth.refresh_access_token(token_info['refresh_token'])
        session['token_info'] = token_info  

    return spotipy.Spotify(auth=token_info['access_token'])
