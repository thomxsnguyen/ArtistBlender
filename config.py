''' Configuration keys'''

import os


def _get_env(name: str) -> str:
	value = os.environ.get(name)
	if not value:
		raise RuntimeError(f"Missing required environment variable: {name}")
	return value


CLIENT_ID = _get_env('CLIENT_ID')
CLIENT_SECRET = _get_env('CLIENT_SECRET')
REDIRECT_URI = _get_env('REDIRECT_URI')
SCOPE = os.environ.get(
	'SCOPE',
	'user-top-read user-library-read user-read-playback-state user-modify-playback-state'
)