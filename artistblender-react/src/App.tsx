import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { SearchContainer } from "./components/SearchContainer";
import { AlbumCover } from "./components/AlbumCover";
import { PlaybackControls } from "./components/PlaybackControls";
import { Footer } from "./components/Footer";
import { ErrorPopup } from "./components/ErrorPopup";
import { LoadingMessage } from "./components/LoadingMessage";
import { Login } from "./components/Login";
import { spotifyApi } from "./utils/api";
import type { Artist, Track, UserProfile } from "./types";

function App() {
  const [selectedArtists, setSelectedArtists] = useState<Artist[]>([]);
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showControls, setShowControls] = useState(false);
  const [isAppLoaded, setIsAppLoaded] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [splashExiting, setSplashExiting] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  useEffect(() => {
    // Check if user is authenticated by trying to get top artists
    const checkAuthentication = async () => {
      try {
        const response = await fetch("/api/top_artists");
        if (response.ok) {
          setIsAuthenticated(true);
          setIsCheckingAuth(false);
        } else {
          setIsAuthenticated(false);
          setIsCheckingAuth(false);
        }
      } catch (error) {
        console.error("Auth check failed:", error);
        setIsAuthenticated(false);
        setIsCheckingAuth(false);
      }
    };

    checkAuthentication();
  }, []);

  useEffect(() => {
    // Skip splash screen if not authenticated
    if (!isAuthenticated && !isCheckingAuth) {
      setShowSplash(false);
      return;
    }

    // App loading sequence - Enhanced with slide-down animation
    const loadSequence = async () => {
      // Show splash for 2.5 seconds
      setTimeout(() => {
        setIsAppLoaded(true);
      }, 1500);

      // Start exit animation
      setTimeout(() => {
        setSplashExiting(true);
      }, 2800);

      // Hide splash after animation completes
      setTimeout(() => {
        setShowSplash(false);
      }, 3800);

      // Initialize app data
      try {
        const trackData = await spotifyApi.getCurrentTrack();
        if ("show_controls" in trackData && trackData.show_controls) {
          setCurrentTrack(trackData as Track);
          setShowControls(true);
        }
      } catch (error) {
        console.error("Error initializing app:", error);
      }
    };

    if (isAuthenticated && !isCheckingAuth) {
      loadSequence();
    }
  }, [isAuthenticated, isCheckingAuth]);

  const handleShuffle = async () => {
    if (selectedArtists.length === 0) {
      setError("Please select at least one artist before shuffling.");
      return;
    }

    setIsLoading(true);
    try {
      const artistIds = selectedArtists.map((artist) => artist.id);
      const result = await spotifyApi.shuffle(artistIds);

      if (result.success) {
        setSelectedArtists([]);
        setTimeout(async () => {
          try {
            const trackData = await spotifyApi.getCurrentTrack();
            if ("show_controls" in trackData && trackData.show_controls) {
              setCurrentTrack(trackData as Track);
              setShowControls(true);
            }
          } catch (error) {
            console.error("Error refreshing track:", error);
          }
        }, 1000);
      } else {
        setError(result.error || "Error shuffling tracks.");
      }
    } catch (error) {
      console.error("Error shuffling:", error);
      setError("An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  const handlePlaybackAction = async (
    action: "play" | "pause" | "previous" | "next"
  ) => {
    try {
      switch (action) {
        case "play":
          await spotifyApi.playTrack();
          break;
        case "pause":
          await spotifyApi.pauseTrack();
          break;
        case "previous":
          await spotifyApi.previousTrack();
          break;
        case "next":
          await spotifyApi.nextTrack();
          break;
      }
      setTimeout(async () => {
        try {
          const trackData = await spotifyApi.getCurrentTrack();
          if ("show_controls" in trackData && trackData.show_controls) {
            setCurrentTrack(trackData as Track);
            setShowControls(true);
          }
        } catch (error) {
          console.error("Error refreshing track:", error);
        }
      }, 500);
    } catch (error) {
      console.error(`Error with ${action} action:`, error);
    }
  };

  // Show login page if not authenticated
  if (!isAuthenticated && !isCheckingAuth) {
    return <Login />;
  }

  // Show loading while checking authentication
  if (isCheckingAuth) {
    return (
      <div className="min-h-screen bg-spotify-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-spotify-dark-gray border-t-spotify-green rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-spotify-text-subdued">Loading...</p>
        </div>
      </div>
    );
  }

  // Enhanced Colorful Splash Screen
  if (showSplash) {
    return (
      <div
        className={`fixed inset-0 bg-gradient-to-br from-black via-spotify-neon-purple/20 via-spotify-electric-blue/10 to-black flex items-center justify-center z-50 overflow-hidden ${
          splashExiting ? "animate-splash-slide-down" : ""
        }`}
      >
        {/* Animated Background Particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-spotify-green/30 rounded-full blur-2xl animate-particle-float"></div>
          <div
            className="absolute top-1/3 right-1/4 w-24 h-24 bg-spotify-electric-blue/40 rounded-full blur-xl animate-particle-float"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-1/3 left-1/3 w-28 h-28 bg-spotify-hot-pink/35 rounded-full blur-xl animate-particle-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-1/4 right-1/3 w-20 h-20 bg-spotify-lime-green/45 rounded-full blur-lg animate-particle-float"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/6 w-16 h-16 bg-spotify-sunset-orange/50 rounded-full blur-lg animate-particle-float"
            style={{ animationDelay: "1.5s" }}
          ></div>
        </div>

        <div className="text-center relative z-10">
          {/* Enhanced Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-spotify-green/20 via-spotify-electric-blue/15 to-spotify-hot-pink/20 rounded-full blur-3xl animate-colorful-glow"></div>

          <div className="relative z-10">
            {/* Animated Logo */}
            <div className="mb-12 animate-spotify-bounce">
              <div className="relative">
                <div className="absolute inset-0 animate-rainbow-pulse rounded-full blur-2xl opacity-60"></div>
                <svg
                  className="w-40 h-40 mx-auto text-spotify-green relative z-10 drop-shadow-2xl animate-logo-spin"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.84-.66 0-.359.24-.66.54-.78 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.242 1.021zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
              </div>
            </div>

            {/* Enhanced Title and Content */}
            {isAppLoaded && (
              <div className="animate-title-entrance">
                <h1 className="text-6xl md:text-7xl font-black text-white mb-4 tracking-tight text-center drop-shadow-2xl">
                  ArtistBlender
                </h1>
                <p className="text-xl text-white/90 font-semibold text-center mb-2 drop-shadow-lg">
                  Mix • Discover • Vibe
                </p>
                <p className="text-lg text-spotify-text-subdued font-medium text-center mb-6">
                  Powered by{" "}
                  <span className="text-spotify-green font-bold drop-shadow-sm">
                    Spotify
                  </span>
                </p>

                {/* Enhanced Loading Animation */}
                <div className="flex justify-center space-x-2">
                  <div className="w-3 h-3 bg-spotify-green rounded-full animate-loading-bounce"></div>
                  <div
                    className="w-3 h-3 bg-spotify-electric-blue rounded-full animate-loading-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="w-3 h-3 bg-spotify-hot-pink rounded-full animate-loading-bounce"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                  <div
                    className="w-3 h-3 bg-spotify-lime-green rounded-full animate-loading-bounce"
                    style={{ animationDelay: "0.6s" }}
                  ></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-spotify-black text-white font-inter overflow-hidden animate-fade-in">
      {/* Header */}
      <div className="animate-slide-in-left animation-delay-100">
        <Header userProfile={userProfile} />
      </div>

      {/* Main Content */}
      <main className="relative bg-gradient-to-b from-spotify-dark-gray to-spotify-black min-h-screen">
        {/* Subtle Natural Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-spotify-green/8 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-spotify-green/5 rounded-full blur-3xl animate-float-delayed"></div>

          {/* More natural accent elements */}
          <div className="absolute top-1/2 left-0 w-64 h-64 bg-spotify-green/6 rounded-full blur-2xl animate-particle-float"></div>
          <div
            className="absolute top-1/3 right-0 w-72 h-72 bg-spotify-green/4 rounded-full blur-3xl animate-particle-float"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative container mx-auto px-6 pt-16 pb-32">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in-up animation-delay-300">
            <div className="relative mb-8">
              {/* Natural subtle glow behind title */}
              <div className="absolute inset-0 bg-spotify-green/10 rounded-full blur-3xl animate-soft-glow"></div>
              <h1 className="relative text-6xl md:text-7xl font-black text-white mb-4 tracking-tight drop-shadow-2xl">
                <span className="text-white drop-shadow-xl">Your music,</span>
                <br />
                <span className="text-spotify-green drop-shadow-xl">
                  your way
                </span>
              </h1>
            </div>
            <p className="text-lg text-spotify-text-subdued max-w-2xl mx-auto font-light mb-4">
              Mix and discover music from your favorite artists. Create the
              perfect blend.
            </p>

            {/* Simple decorative line */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-1 bg-spotify-green rounded-full animate-soft-glow"></div>
            </div>
          </div>

          {/* Search Section */}
          <div className="animate-fade-in-up animation-delay-500">
            <SearchContainer
              selectedArtists={selectedArtists}
              onArtistsChange={setSelectedArtists}
              onShuffle={handleShuffle}
              isLoading={isLoading}
              showControls={showControls}
            />
          </div>

          {/* Now Playing Section */}
          {currentTrack && showControls && (
            <div className="mt-12 animate-fade-in-up animation-delay-400">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">
                  Now Playing
                </h2>
                <div className="w-16 h-1 bg-spotify-green mx-auto rounded-full"></div>
              </div>

              <div className="max-w-md mx-auto">
                <AlbumCover
                  albumImageUrl={currentTrack.album_image_url}
                  trackName={currentTrack.track_name}
                  artistName={currentTrack.artist_name}
                />
                <PlaybackControls
                  isPlaying={currentTrack.is_playing}
                  onPlaybackAction={handlePlaybackAction}
                />
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <div className="animate-slide-in-right animation-delay-600">
        <Footer currentTrack={currentTrack} showControls={showControls} />
      </div>

      {/* Modals */}
      {error && <ErrorPopup message={error} onClose={() => setError(null)} />}
      {isLoading && <LoadingMessage />}
    </div>
  );
}

export default App;
