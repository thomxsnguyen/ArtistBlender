import React from "react";

export const Login: React.FC = () => {
  const handleSpotifyLogin = () => {
    // Redirect to Flask backend login endpoint
    window.location.href = "http://127.0.0.1:5000/";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-spotify-black via-spotify-dark-gray to-spotify-black flex items-center justify-center px-4">
      {/* Animated background particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-spotify-green/10 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-spotify-green/5 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-spotify-green/5 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-md mx-auto">
        {/* Spotify Logo */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-spotify-green/30 rounded-full blur-2xl"></div>
            <svg
              className="w-20 h-20 text-spotify-green relative z-10"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.84-.66 0-.359.24-.66.54-.78 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.242 1.021zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Artist
          <span className="text-spotify-green">Blender</span>
        </h1>

        {/* Description */}
        <p className="text-spotify-text-subdued text-lg mb-4">
          Shuffle songs from multiple artists simultaneously
        </p>
        <p className="text-spotify-text-subdued text-sm mb-12">
          Connect your Spotify account to get started
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="group p-4 rounded-lg bg-spotify-dark-gray/50 hover:bg-spotify-medium-gray/50 transition-all duration-300">
            <div className="text-2xl mb-2">🎵</div>
            <p className="text-white font-medium text-sm">Multiple Artists</p>
            <p className="text-spotify-text-subdued text-xs mt-1">
              Blend from many artists
            </p>
          </div>
          <div className="group p-4 rounded-lg bg-spotify-dark-gray/50 hover:bg-spotify-medium-gray/50 transition-all duration-300">
            <div className="text-2xl mb-2">🔀</div>
            <p className="text-white font-medium text-sm">Shuffle</p>
            <p className="text-spotify-text-subdued text-xs mt-1">
              Randomized playlists
            </p>
          </div>
          <div className="group p-4 rounded-lg bg-spotify-dark-gray/50 hover:bg-spotify-medium-gray/50 transition-all duration-300">
            <div className="text-2xl mb-2">▶️</div>
            <p className="text-white font-medium text-sm">Play</p>
            <p className="text-spotify-text-subdued text-xs mt-1">
              Instant playback
            </p>
          </div>
        </div>

        {/* Login Button */}
        <button
          onClick={handleSpotifyLogin}
          className="group relative w-full md:w-80 mx-auto px-8 py-4 bg-spotify-green text-black font-bold text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl hover:shadow-spotify-green/50"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-spotify-green-light to-spotify-green opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <span className="relative z-10 flex items-center justify-center space-x-2">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.84-.66 0-.359.24-.66.54-.78 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.242 1.021zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
            <span>Login with Spotify</span>
          </span>
        </button>

        {/* Footer note */}
        <p className="text-spotify-text-subdued text-xs mt-8">
          We only access what we need to make music blending work
        </p>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};
