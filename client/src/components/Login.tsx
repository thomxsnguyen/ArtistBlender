import React, { useState, useEffect } from "react";
import { spotifyApi } from "../utils/api";

export const Login: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Logout when component mounts
    const handleLogout = async () => {
      try {
        await spotifyApi.logout();
      } catch (error) {
        console.error("Logout failed:", error);
      }
    };
    handleLogout();
  }, []);

  const handleGetStarted = () => {
    setShowAuthModal(true);
  };

  const handleSpotifyLogin = () => {
    // Redirect to Flask backend login endpoint
    const backendUrl = import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000";
    window.location.href = backendUrl;
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

      {/* Floating Pill Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ease-out ${
          isScrolled ? "pt-4" : "pt-6"
        }`}
      >
        <div
          className={`flex items-center justify-between transition-all duration-500 ease-out ${
            isScrolled
              ? "bg-black/70 backdrop-blur-2xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.4)] rounded-full px-10 py-3 w-[900px]"
              : "bg-transparent border border-transparent rounded-full px-12 py-4 w-[1000px]"
          }`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`rounded-full bg-spotify-green/20 text-spotify-green flex items-center justify-center transition-all duration-500 ${
                isScrolled ? "h-8 w-8" : "h-10 w-10"
              } hover:bg-spotify-green/30 hover:scale-110`}
            >
              <svg
                className={`transition-all duration-500 ${isScrolled ? "h-4 w-4" : "h-5 w-5"}`}
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.84-.66 0-.359.24-.66.54-.78 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.242 1.021zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
            </div>
            <div className="transition-all duration-500">
              <p
                className={`uppercase tracking-[0.3em] text-spotify-text-subdued transition-all duration-500 ${
                  isScrolled ? "text-[9px]" : "text-[10px]"
                }`}
              >
                Spotify
              </p>
              <p
                className={`font-semibold text-white transition-all duration-500 ${
                  isScrolled ? "text-xs" : "text-sm"
                }`}
              >
                ArtistBlender
              </p>
            </div>
          </div>

          <div className="flex items-center gap-8 text-sm text-spotify-text-subdued">
            <a
              href="#how-it-works"
              className="hover:text-white transition-all duration-300 hover:scale-105 relative group"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/how-it-works";
              }}
            >
              How it works
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-spotify-green transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#about"
              className="hover:text-white transition-all duration-300 hover:scale-105 relative group"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/about";
              }}
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-spotify-green transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center animate-fade-in-up pt-48">
        {/* Hero section */}
        <div className="mb-20">
          <h1 className="text-6xl md:text-7xl font-bold mb-12 bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent leading-tight animate-title-glow">
            Blend your
            <br />
            <span className="bg-gradient-to-r from-spotify-green via-spotify-green-light to-spotify-green bg-clip-text text-transparent">
              favorite artists
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fade-in-delayed mb-12">
            Create seamless mixes from the artists you love and play them
            instantly.
          </p>
        </div>

        {/* CTA Button */}
        <div className="mb-16 animate-scale-in">
          <button
            onClick={handleGetStarted}
            className="group relative inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_40px_rgba(255,255,255,0.25)]"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.84-.66 0-.359.24-.66.54-.78 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.242 1.021zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
            Get Started
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
                    <div className="w-full aspect-square rounded mb-2 overflow-hidden">
                      <img
                        src="https://i.scdn.co/image/ab6761610000e5eb859e4c14fa59296c8649e0e4"
                        alt="Taylor Swift"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-white text-sm font-medium">
                      Taylor Swift
                    </p>
                    <p className="text-gray-400 text-xs">Artist</p>
                  </div>
                  <div className="bg-spotify-dark-gray/60 rounded-lg p-3">
                    <div className="w-full aspect-square rounded mb-2 overflow-hidden">
                      <img
                        src="https://i.scdn.co/image/ab6761610000e5eb4293385d324db8558179afd9"
                        alt="Drake"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-white text-sm font-medium">Drake</p>
                    <p className="text-gray-400 text-xs">Artist</p>
                  </div>
                  <div className="bg-spotify-dark-gray/60 rounded-lg p-3">
                    <div className="w-full aspect-square rounded mb-2 overflow-hidden">
                      <img
                        src="https://i.scdn.co/image/ab6761610000e5eb19c2790744c792d05570bb71"
                        alt="Travis Scott"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-white text-sm font-medium">
                      Travis Scott
                    </p>
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

          <div className="relative rounded-3xl bg-gradient-to-br from-black/40 to-spotify-green/5 backdrop-blur border border-white/5 p-8 hover:from-black/60 hover:to-spotify-green/10 transition-all duration-300 group overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-spotify-green/5 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:bg-spotify-green/10 transition-all duration-500"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-gradient-to-br from-spotify-green/20 to-spotify-green/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-spotify-green/10">
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
                    d="M9 12l2 2 4-4m5.818-4.954A9.003 9.003 0 0112 21a9.003 9.003 0 01-8.818-7.046M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3 text-center tracking-tight">
                Seamless Integration
              </h3>
              <p className="text-gray-400 text-sm text-center leading-relaxed">
                Native-like experience that works flawlessly with Spotify's
                ecosystem
              </p>
              <div className="mt-4 flex items-center justify-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-spotify-green rounded-full animate-pulse"></div>
                <div className="w-1.5 h-1.5 bg-spotify-green/60 rounded-full animate-pulse delay-150"></div>
                <div className="w-1.5 h-1.5 bg-spotify-green/30 rounded-full animate-pulse delay-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Authentication Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="relative bg-gradient-to-br from-spotify-dark-gray to-black border border-white/10 rounded-3xl p-8 max-w-md w-full shadow-2xl animate-scale-in">
            <button
              onClick={() => setShowAuthModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">
                Connect Your Spotify
              </h2>
              <p className="text-gray-400 text-sm">
                Sign in with your Spotify account to continue
              </p>
            </div>

            {/* Spotify Login */}
            <button
              onClick={handleSpotifyLogin}
              className="w-full group relative bg-spotify-green hover:bg-[#1fdf64] text-white font-bold py-4 px-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_30px_rgba(30,215,96,0.3)]"
            >
              <div className="flex items-center justify-center gap-3">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.84-.66 0-.359.24-.66.54-.78 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.242 1.021zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
                Continue with Spotify
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
              </div>
            </button>

            <p className="mt-6 text-center text-xs text-gray-500">
              By continuing, you agree to ArtistBlender's Terms of Service and
              Privacy Policy
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
