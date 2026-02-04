export default function HowItWorks() {
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
              onClick={() => window.location.href = '/'}
              className="flex items-center gap-2 text-white hover:text-spotify-green transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 12H5M12 19l-7-7 7-7" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Back</span>
            </button>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-spotify-green bg-clip-text text-transparent">
              How It Works
            </h1>
            <div className="w-16"></div>
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
              <h3 className="text-2xl font-semibold text-white mb-3">Search Artists</h3>
              <p className="text-gray-300 leading-relaxed">
                Start by searching for your favorite artists in the search bar. Find exactly who you want to blend.
              </p>
            </div>

            {/* Step 2 */}
            <div className="rounded-3xl bg-gradient-to-br from-black/40 to-spotify-green/5 backdrop-blur border border-white/10 p-8 hover:border-spotify-green/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-spotify-green/20 to-spotify-green/5 rounded-2xl flex items-center justify-center mb-6 group-hover:from-spotify-green/40 group-hover:to-spotify-green/20 transition-all duration-300">
                <span className="text-2xl font-bold text-spotify-green">2</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Select & Combine</h3>
              <p className="text-gray-300 leading-relaxed">
                Click on artists to add them to your blend. You can mix as many artists as you want for ultimate customization.
              </p>
            </div>

            {/* Step 3 */}
            <div className="rounded-3xl bg-gradient-to-br from-black/40 to-spotify-green/5 backdrop-blur border border-white/10 p-8 hover:border-spotify-green/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-spotify-green/20 to-spotify-green/5 rounded-2xl flex items-center justify-center mb-6 group-hover:from-spotify-green/40 group-hover:to-spotify-green/20 transition-all duration-300">
                <span className="text-2xl font-bold text-spotify-green">3</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Click Shuffle</h3>
              <p className="text-gray-300 leading-relaxed">
                Hit the shuffle button to generate a personalized blend of tracks from your selected artists.
              </p>
            </div>

            {/* Step 4 */}
            <div className="rounded-3xl bg-gradient-to-br from-black/40 to-spotify-green/5 backdrop-blur border border-white/10 p-8 hover:border-spotify-green/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-spotify-green/20 to-spotify-green/5 rounded-2xl flex items-center justify-center mb-6 group-hover:from-spotify-green/40 group-hover:to-spotify-green/20 transition-all duration-300">
                <span className="text-2xl font-bold text-spotify-green">4</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Enjoy & Preview</h3>
              <p className="text-gray-300 leading-relaxed">
                Listen to track previews and explore your blend. Discover new music at the intersection of your favorite artists.
              </p>
            </div>
          </div>

          {/* Key features section */}
          <section className="rounded-3xl bg-gradient-to-br from-black/40 to-spotify-green/5 backdrop-blur border border-white/10 p-12">
            <h2 className="text-3xl font-bold text-white mb-8">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-spotify-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-spotify-green" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 19V6l12-1v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-1" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Instant Playback</h4>
                  <p className="text-gray-400 text-sm">Start playing your blend immediately with integrated Spotify controls.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-spotify-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-spotify-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Unlimited Artists</h4>
                  <p className="text-gray-400 text-sm">Combine as many artists as you want for endless creative possibilities.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-spotify-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-spotify-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Smart Algorithm</h4>
                  <p className="text-gray-400 text-sm">Advanced blending technology creates natural, seamless music combinations.</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
