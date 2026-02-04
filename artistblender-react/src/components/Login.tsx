import React from "react";

export const Login: React.FC = () => {
  const handleSpotifyLogin = () => {
    // Redirect to Flask backend login endpoint
    window.location.href = "http://127.0.0.1:8000/";
  };

  return (
    <div className="min-h-screen bg-[#0b0f0d] text-white flex items-center justify-center px-6">
      <div className="w-full max-w-lg rounded-3xl border border-spotify-border-gray bg-spotify-dark-gray/70 p-10 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-2xl bg-spotify-green/20 text-spotify-green flex items-center justify-center">
            <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.84-.66 0-.359.24-.66.54-.78 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.242 1.021zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-spotify-text-subdued">
              ArtistBlender
            </p>
            <h1 className="text-2xl font-semibold">Connect your Spotify</h1>
          </div>
        </div>

        <p className="mt-6 text-spotify-text-subdued">
          Sign in to blend multiple artists and instantly shuffle their tracks.
        </p>

        <button
          onClick={handleSpotifyLogin}
          className="mt-8 w-full rounded-full bg-spotify-green px-6 py-3 text-base font-semibold text-black transition hover:bg-spotify-green-light"
        >
          Continue with Spotify
        </button>

        <div className="mt-8 grid grid-cols-3 gap-3 text-xs text-spotify-text-subdued">
          <div className="rounded-2xl border border-spotify-border-gray bg-spotify-black/40 px-3 py-2 text-center">
            Multi-artist blends
          </div>
          <div className="rounded-2xl border border-spotify-border-gray bg-spotify-black/40 px-3 py-2 text-center">
            Instant shuffle
          </div>
          <div className="rounded-2xl border border-spotify-border-gray bg-spotify-black/40 px-3 py-2 text-center">
            Live playback
          </div>
        </div>
      </div>
    </div>
  );
};
