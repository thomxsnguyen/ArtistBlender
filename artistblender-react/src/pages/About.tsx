export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-black to-spotify-green/5 relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-spotify-green/20 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-spotify-green/20 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-white/10 backdrop-blur-md bg-black/50">
          <div className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
            <button
              onClick={() => (window.location.href = "/")}
              className="flex items-center gap-2 text-white hover:text-spotify-green transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 12H5M12 19l-7-7 7-7"
                />
              </svg>
              <span>Back</span>
            </button>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-spotify-green bg-clip-text text-transparent">
              About ArtistBlender
            </h1>
            <div className="w-16"></div>
          </div>
        </header>

        {/* Main content */}
        <main className="max-w-4xl mx-auto px-6 py-16">
          {/* Hero section */}
          <section className="mb-16 text-center">
            <div className="inline-block mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-spotify-green/20 to-spotify-green/5 rounded-3xl flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-spotify-green"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9 19V6l12-1v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-1"
                    strokeWidth={2}
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Blend Your Music, Your Way
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              ArtistBlender is built for music lovers who want to discover the
              intersection of their favorite artists. Create unique,
              personalized blends instantly.
            </p>
          </section>

          {/* Mission section */}
          <section className="rounded-3xl bg-gradient-to-br from-black/40 to-spotify-green/5 backdrop-blur border border-white/10 p-10 mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Music discovery shouldn't be complicated. We believe that the most
              interesting playlists happen when you blend the artists you love.
              ArtistBlender makes this seamless, intuitive, and fun.
            </p>
            <p className="text-gray-300 leading-relaxed">
              By combining advanced algorithms with Spotify's massive music
              library, we help you find your next favorite song at the
              intersection of multiple artists. No playlists. No algorithms
              deciding for you. Just pure artist blending.
            </p>
          </section>

          {/* Values section */}
          <section className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              What We Stand For
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl bg-gradient-to-br from-black/40 to-spotify-green/5 backdrop-blur border border-white/10 p-6 hover:border-spotify-green/50 transition-all duration-300">
                <div className="w-12 h-12 bg-spotify-green/20 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-spotify-green"
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
                <h4 className="text-lg font-semibold text-white mb-2">
                  Simple & Clean
                </h4>
                <p className="text-gray-400 text-sm">
                  We believe in simplicity. No unnecessary features. Just the
                  tools you need to blend artists and discover music.
                </p>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-black/40 to-spotify-green/5 backdrop-blur border border-white/10 p-6 hover:border-spotify-green/50 transition-all duration-300">
                <div className="w-12 h-12 bg-spotify-green/20 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-spotify-green"
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
                <h4 className="text-lg font-semibold text-white mb-2">
                  Lightning Fast
                </h4>
                <p className="text-gray-400 text-sm">
                  Instant results. From search to shuffle to playback,
                  everything happens in milliseconds.
                </p>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-black/40 to-spotify-green/5 backdrop-blur border border-white/10 p-6 hover:border-spotify-green/50 transition-all duration-300">
                <div className="w-12 h-12 bg-spotify-green/20 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-spotify-green"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  Smart Technology
                </h4>
                <p className="text-gray-400 text-sm">
                  Our algorithm understands musical styles and creates blends
                  that make sense together.
                </p>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-black/40 to-spotify-green/5 backdrop-blur border border-white/10 p-6 hover:border-spotify-green/50 transition-all duration-300">
                <div className="w-12 h-12 bg-spotify-green/20 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-spotify-green"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  Built for Spotify
                </h4>
                <p className="text-gray-400 text-sm">
                  Fully integrated with Spotify. Search, listen, and control
                  playback seamlessly.
                </p>
              </div>
            </div>
          </section>

          {/* CTA section */}
          <section className="text-center py-12">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Blending?
            </h3>
            <p className="text-gray-300 mb-8">
              Create your first artist blend and discover music at the
              intersection of your favorites.
            </p>
            <button
              onClick={() => (window.location.href = "/")}
              className="px-8 py-3 bg-gradient-to-r from-spotify-green to-spotify-green/80 text-black font-semibold rounded-full hover:shadow-lg hover:shadow-spotify-green/50 hover:scale-105 transition-all duration-300"
            >
              Get Started
            </button>
          </section>
        </main>
      </div>
    </div>
  );
}
