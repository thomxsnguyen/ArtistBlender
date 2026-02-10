export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative">
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

        {/* Hero Section */}
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
            How ArtistBlender Works
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Seamlessly blend your favorite artists and play them instantly
            through Spotify's queue system—no playlists required.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto px-6 pb-20">
          {/* Section 1: Open Spotify Web */}
          <section className="mb-24">
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                1. Open Your Spotify Web Browser
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                ArtistBlender connects directly to your Spotify account through
                the web browser. Simply log in with your Spotify credentials to
                get started. The app integrates seamlessly with Spotify's Web
                API, allowing it to control playback and manage your queue
                without any downloads or installations.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-neutral-900/50 shadow-2xl">
              <img
                src="/samplepic.png"
                alt="Spotify web interface showing ArtistBlender"
                className="w-full h-auto object-contain"
              />
            </div>
          </section>

          {/* Section 2: Search and Select */}
          <section className="mb-24">
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                2. Search and Select Your Favorite Artists
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                Type the names of artists you want to blend into the search bar.
                As you type, ArtistBlender queries Spotify's vast music library
                in real-time, showing you matching artists instantly. Click on
                an artist to add them to your blend.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-neutral-900/50 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-spotify-green/10 flex items-center justify-center mb-4">
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
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  Real-Time Search
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Search Spotify's entire catalog of artists as you type
                </p>
              </div>

              <div className="bg-neutral-900/50 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-spotify-green/10 flex items-center justify-center mb-4">
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
                <h3 className="text-white font-semibold text-lg mb-2">
                  Multiple Artists
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Select as many artists as you want to create your perfect
                  blend
                </p>
              </div>

              <div className="bg-neutral-900/50 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-spotify-green/10 flex items-center justify-center mb-4">
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  Easy Management
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Remove artists from your selection with a single click
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Queue System */}
          <section className="mb-24">
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                3. Creates a Queue in Your Account
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                When you hit "Shuffle & Play," ArtistBlender intelligently
                curates a mix of tracks from your selected artists and adds them
                directly to your Spotify queue. This means you don't need to
                create a new playlist or clutter your library—the music starts
                playing instantly and naturally flows through your Spotify app.
              </p>
            </div>

            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Why Use the Queue System?
              </h3>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-spotify-green flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-3.5 h-3.5 text-black"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium mb-1">
                      No Playlist Clutter
                    </p>
                    <p className="text-gray-400 text-sm">
                      Your library stays organized without creating dozens of
                      temporary playlists
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-spotify-green flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-3.5 h-3.5 text-black"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium mb-1">
                      Instant Playback
                    </p>
                    <p className="text-gray-400 text-sm">
                      Music starts immediately without waiting for playlist
                      creation
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-spotify-green flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-3.5 h-3.5 text-black"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium mb-1">
                      Flexible Listening
                    </p>
                    <p className="text-gray-400 text-sm">
                      Easily blend different artists each time without managing
                      saved playlists
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-spotify-green flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-3.5 h-3.5 text-black"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium mb-1">
                      Native Experience
                    </p>
                    <p className="text-gray-400 text-sm">
                      Works seamlessly with Spotify's built-in queue management
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-white/5">
              <img
                src="/queue.png"
                alt="Spotify queue showing blended tracks from multiple artists"
                className="w-full h-auto max-h-[600px] object-contain bg-black"
              />
            </div>
            <p className="text-sm text-gray-500 mt-3 text-center italic">
              Your blended tracks appear directly in your Spotify queue, ready
              to play
            </p>
          </section>

          {/* Section 4: Control Playback */}
          <section className="mb-24">
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                4. Control Playback Seamlessly
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                Once your blend starts playing, ArtistBlender provides real-time
                playback controls right in the interface. Play, pause, skip
                tracks, or adjust volume without switching between apps. The app
                syncs with your Spotify account in real-time, so any changes you
                make are reflected instantly across all your devices.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-neutral-900/50 rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-spotify-green/10 flex items-center justify-center mb-5">
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
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-xl mb-3">
                  Live Playback
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  See what's currently playing with album art and track
                  information updated in real-time
                </p>
              </div>

              <div className="bg-neutral-900/50 rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-spotify-green/10 flex items-center justify-center mb-5">
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
                <h3 className="text-white font-semibold text-xl mb-3">
                  Full Control
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Play, pause, skip, and manage your queue with intuitive
                  controls that sync across devices
                </p>
              </div>
            </div>
          </section>

          {/* Bottom Line */}
          <section className="bg-gradient-to-br from-spotify-green/10 to-spotify-green/5 rounded-2xl p-10 md:p-12 border border-spotify-green/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
              The Bottom Line
            </h2>
            <p className="text-lg text-gray-300 text-center leading-relaxed max-w-2xl mx-auto mb-8">
              ArtistBlender leverages Spotify's queue system to give you
              instant, playlist-free music blending. Search for artists, create
              your blend, and start listening—all without cluttering your
              library. It's the simplest way to discover new combinations of
              your favorite music.
            </p>
            <div className="text-center">
              <a
                href="/login"
                className="inline-flex items-center gap-3 bg-spotify-green hover:bg-spotify-green-light text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-spotify-green/50"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.84-.66 0-.359.24-.66.54-.78 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.242 1.021zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
                Try ArtistBlender Now
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="border-t border-white/10 py-8 mt-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-gray-500 text-sm">
              © 2026 ArtistBlender. All rights reserved. Powered by Spotify.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
