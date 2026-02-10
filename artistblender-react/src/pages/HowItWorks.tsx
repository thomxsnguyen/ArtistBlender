export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-black to-spotify-green/5 relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-spotify-green/20 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-spotify-green/20 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10">
        {/* Simple Navbar */}
        <header className="backdrop-blur-md bg-black/50">
          <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => (window.location.href = "/")}
            >
              <div className="h-10 w-10 rounded-full bg-spotify-green/15 text-spotify-green flex items-center justify-center">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.84-.66 0-.359.24-.66.54-.78 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.242 1.021zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-spotify-text-subdued">
                  Spotify
                </p>
                <p className="text-sm font-semibold text-white">
                  ArtistBlender
                </p>
              </div>
            </div>
            <div className="flex items-center gap-8 text-sm text-spotify-text-subdued">
              <a
                href="/login"
                className="hover:text-white transition-all duration-300 hover:scale-105"
              >
                Home
              </a>
              <a
                href="/how-it-works"
                className="hover:text-white transition-all duration-300 hover:scale-105"
              >
                How it works
              </a>
              <a
                href="/about"
                className="hover:text-white transition-all duration-300 hover:scale-105"
              >
                About
              </a>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="max-w-5xl mx-auto px-6 py-16">
          {/* Steps grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Step 1 */}
            <div className="rounded-3xl bg-gradient-to-br from-black/40 to-spotify-green/5 backdrop-blur border border-white/10 p-8 hover:border-spotify-green/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-spotify-green/20 to-spotify-green/5 rounded-2xl flex items-center justify-center mb-6 group-hover:from-spotify-green/40 group-hover:to-spotify-green/20 transition-all duration-300">
                <span className="text-2xl font-bold text-spotify-green">1</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                Search Artists
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Start by searching for your favorite artists in the search bar.
                Find exactly who you want to blend.
              </p>
            </div>

            {/* Step 2 */}
            <div className="rounded-3xl bg-gradient-to-br from-black/40 to-spotify-green/5 backdrop-blur border border-white/10 p-8 hover:border-spotify-green/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-spotify-green/20 to-spotify-green/5 rounded-2xl flex items-center justify-center mb-6 group-hover:from-spotify-green/40 group-hover:to-spotify-green/20 transition-all duration-300">
                <span className="text-2xl font-bold text-spotify-green">2</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                Select & Combine
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Click on artists to add them to your blend. You can mix as many
                artists as you want for ultimate customization.
              </p>
            </div>

            {/* Step 3 */}
            <div className="rounded-3xl bg-gradient-to-br from-black/40 to-spotify-green/5 backdrop-blur border border-white/10 p-8 hover:border-spotify-green/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-spotify-green/20 to-spotify-green/5 rounded-2xl flex items-center justify-center mb-6 group-hover:from-spotify-green/40 group-hover:to-spotify-green/20 transition-all duration-300">
                <span className="text-2xl font-bold text-spotify-green">3</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                Click Shuffle
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Hit the shuffle button to generate a personalized blend of
                tracks from your selected artists.
              </p>
            </div>

            {/* Step 4 */}
            <div className="rounded-3xl bg-gradient-to-br from-black/40 to-spotify-green/5 backdrop-blur border border-white/10 p-8 hover:border-spotify-green/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-spotify-green/20 to-spotify-green/5 rounded-2xl flex items-center justify-center mb-6 group-hover:from-spotify-green/40 group-hover:to-spotify-green/20 transition-all duration-300">
                <span className="text-2xl font-bold text-spotify-green">4</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                Enjoy & Preview
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Listen to track previews and explore your blend. Discover new
                music at the intersection of your favorite artists.
              </p>
            </div>
          </div>

          {/* Key features section */}
          <section className="rounded-3xl bg-gradient-to-br from-black/40 to-spotify-green/5 backdrop-blur border border-white/10 p-12">
            <h2 className="text-3xl font-bold text-white mb-8">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-spotify-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-spotify-green"
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
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">
                    Instant Playback
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Start playing your blend immediately with integrated Spotify
                    controls.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-spotify-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
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
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">
                    Unlimited Artists
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Combine as many artists as you want for endless creative
                    possibilities.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-spotify-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
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
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">
                    Smart Algorithm
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Advanced blending technology creates natural, seamless music
                    combinations.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
