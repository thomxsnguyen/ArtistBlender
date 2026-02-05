import React from "react";

export const Login: React.FC = () => {
  const handleSpotifyLogin = () => {
    // Redirect to Flask backend login endpoint
    window.location.href = "http://127.0.0.1:8000/";
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col justify-center items-center px-6">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-spotify-green/20 via-spotify-black to-black"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-spotify-green/10"></div>

      {/* Animated background orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-spotify-green/10 rounded-full blur-3xl animate-float opacity-60"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-spotify-green/5 rounded-full blur-2xl animate-float-delayed opacity-40"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-spotify-green/5 via-transparent to-transparent rounded-full animate-pulse-slow"></div>

      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 z-20">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-spotify-green/15 text-spotify-green flex items-center justify-center">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.84-.66 0-.359.24-.66.54-.78 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.242 1.021zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-spotify-text-subdued">
                Spotify
              </p>
              <p className="text-sm font-semibold text-white">ArtistBlender</p>
            </div>
          </div>
          <div className="flex items-center gap-6 text-sm text-spotify-text-subdued">
            <a
              href="#how-it-works"
              className="hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/how-it-works";
              }}
            >
              How it works
            </a>
            <a
              href="#about"
              className="hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/about";
              }}
            >
              About
            </a>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center animate-fade-in-up pt-12">
        {/* Hero section */}
        <div className="mb-12">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent leading-tight animate-title-glow">
            Blend your
            <br />
            <span className="bg-gradient-to-r from-spotify-green via-spotify-green-light to-spotify-green bg-clip-text text-transparent">
              favorite artists
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fade-in-delayed">
            Create seamless mixes from the artists you love and play them
            instantly.
          </p>
        </div>

        {/* CTA Button */}
        <div className="mb-16 animate-scale-in">
          <button
            onClick={handleSpotifyLogin}
            className="group relative inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_40px_rgba(255,255,255,0.25)]"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.84-.66 0-.359.24-.66.54-.78 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.242 1.021zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
            Get for Spotify
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>

        {/* Modern interface preview */}
        <div className="relative max-w-4xl mx-auto animate-fade-in-delayed">
          {/* Browser mockup */}
          <div className="relative rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-black/20 backdrop-blur-xl border border-white/20 shadow-[0_40px_120px_rgba(0,0,0,0.5)] overflow-hidden">
            {/* Browser header */}
            <div className="flex items-center gap-2 px-6 py-4 bg-black/40 border-b border-white/10">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              <div className="ml-4 text-sm text-gray-400">ArtistBlender</div>
            </div>

            {/* Interface content */}
            <div className="p-8 bg-gradient-to-br from-spotify-dark-gray/90 to-black/95">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-spotify-green/20 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-spotify-green"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.84-.66 0-.359.24-.66.54-.78 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.242 1.021zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide">
                      ArtistBlender
                    </p>
                    <h3 className="text-white font-semibold">
                      Blend your favorite artists
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-spotify-green/20 rounded-full">
                  <div className="w-2 h-2 bg-spotify-green rounded-full animate-pulse"></div>
                  <span className="text-xs text-spotify-green">Connected</span>
                </div>
              </div>

              {/* Search interface preview */}
              <div className="space-y-4">
                <div className="relative">
                  <div className="w-full px-4 py-3 bg-black/60 border border-gray-600 rounded-full">
                    <div className="flex items-center gap-3">
                      <svg
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                      <span className="text-gray-400 text-sm">
                        Search for artists...
                      </span>
                    </div>
                  </div>
                </div>

                {/* Sample artist cards */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-spotify-dark-gray/60 rounded-lg p-3">
                    <div className="w-full aspect-square bg-gradient-to-br from-purple-500/40 to-pink-500/40 rounded mb-2"></div>
                    <p className="text-white text-sm font-medium">
                      Taylor Swift
                    </p>
                    <p className="text-gray-400 text-xs">Artist</p>
                  </div>
                  <div className="bg-spotify-dark-gray/60 rounded-lg p-3">
                    <div className="w-full aspect-square bg-gradient-to-br from-blue-500/40 to-purple-500/40 rounded mb-2"></div>
                    <p className="text-white text-sm font-medium">Drake</p>
                    <p className="text-gray-400 text-xs">Artist</p>
                  </div>
                  <div className="bg-spotify-dark-gray/60 rounded-lg p-3">
                    <div className="w-full aspect-square bg-gradient-to-br from-green-500/40 to-blue-500/40 rounded mb-2"></div>
                    <p className="text-white text-sm font-medium">The Weeknd</p>
                    <p className="text-gray-400 text-xs">Artist</p>
                  </div>
                </div>

                {/* Shuffle button preview */}
                <div className="text-center pt-2">
                  <div className="inline-flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-full text-sm font-semibold">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    Shuffle & Play
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in-delayed">
          <div className="rounded-3xl bg-gradient-to-br from-black/40 to-spotify-green/5 backdrop-blur border border-white/5 p-8 hover:from-black/60 hover:to-spotify-green/10 transition-all duration-300 group">
            <div className="w-14 h-14 bg-spotify-green/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-spotify-green/20 transition-all duration-300">
              <svg
                className="w-7 h-7 text-spotify-green"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M11.99 5V1h-1v4H8.21V4.04H7.04v.96H3.5V6h3.54v12H7.04v.96h1.17v-.96h3.78v1.04h1v-4c1.1 0 2-.9 2-2h1V7c0-1.1-.9-2-2-2h-1V5h-1.01zm.01 14H9v-8h3v8z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2 text-center">
              Multi-Artist Blends
            </h3>
            <p className="text-gray-400 text-sm text-center leading-relaxed">
              Seamlessly mix tracks from multiple artists into perfect playlists
            </p>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-black/40 to-spotify-green/5 backdrop-blur border border-white/5 p-8 hover:from-black/60 hover:to-spotify-green/10 transition-all duration-300 group">
            <div className="w-14 h-14 bg-spotify-green/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-spotify-green/20 transition-all duration-300">
              <svg
                className="w-7 h-7 text-spotify-green"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2 text-center">
              Instant Shuffle
            </h3>
            <p className="text-gray-400 text-sm text-center leading-relaxed">
              One-click shuffling with real-time playback control
            </p>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-black/40 to-spotify-green/5 backdrop-blur border border-white/5 p-8 hover:from-black/60 hover:to-spotify-green/10 transition-all duration-300 group">
            <div className="w-14 h-14 bg-spotify-green/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-spotify-green/20 transition-all duration-300">
              <svg
                className="w-7 h-7 text-spotify-green"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2 text-center">
              Undetectable AI
            </h3>
            <p className="text-gray-400 text-sm text-center leading-relaxed">
              Advanced algorithms that work seamlessly with Spotify's platform
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
