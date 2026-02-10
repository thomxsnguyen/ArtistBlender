import { useState, useEffect, useRef } from "react";
import { SearchContainer } from "./components/SearchContainer";
import { AlbumCover } from "./components/AlbumCover";
import { PlaybackControls } from "./components/PlaybackControls";
import { ErrorPopup } from "./components/ErrorPopup";
import { LoadingMessage } from "./components/LoadingMessage";
import { Login } from "./components/Login";
import { spotifyApi } from "./utils/api";
import type { Artist, Track, UserProfile } from "./types";

function App() {
  const [selectedArtists, setSelectedArtists] = useState<Artist[]>([]);
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showControls, setShowControls] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const isPollingRef = useRef(false);

  useEffect(() => {
    // Check if user is authenticated by trying to get top artists
    const checkAuthentication = async () => {
      try {
        const controller = new AbortController();
        const timeoutId = window.setTimeout(() => controller.abort(), 3000);
        await spotifyApi.getTopArtists();
        window.clearTimeout(timeoutId);

        setIsAuthenticated(true);
        // Fetch user profile
        try {
          const profile = await spotifyApi.getUserProfile();
          setUserProfile(profile);
        } catch (profileError) {
          console.error("Profile fetch failed:", profileError);
        }
        setIsCheckingAuth(false);
      } catch (error) {
        console.error("Auth check failed:", error);
        setIsAuthenticated(false);
        setIsCheckingAuth(false);
      }
    };

    checkAuthentication();
  }, []);

  useEffect(() => {
    const initPlaybackState = async () => {
      if (!isAuthenticated || isCheckingAuth) {
        return;
      }
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

    initPlaybackState();
  }, [isAuthenticated, isCheckingAuth]);

  useEffect(() => {
    if (!isAuthenticated || isCheckingAuth) {
      return;
    }

    let isMounted = true;

    const pollPlaybackState = async () => {
      if (isPollingRef.current) {
        return;
      }
      isPollingRef.current = true;
      try {
        const trackData = await spotifyApi.getCurrentTrack();
        if (!isMounted) {
          return;
        }
        if ("show_controls" in trackData && trackData.show_controls) {
          setCurrentTrack(trackData as Track);
          setShowControls(true);
        } else {
          setShowControls(false);
        }
      } catch (error) {
        console.error("Error polling playback state:", error);
      } finally {
        isPollingRef.current = false;
      }
    };

    const intervalId = window.setInterval(pollPlaybackState, 5000);
    pollPlaybackState();

    return () => {
      isMounted = false;
      window.clearInterval(intervalId);
    };
  }, [isAuthenticated, isCheckingAuth]);

  const handleShuffle = async () => {
    if (selectedArtists.length === 0) {
      setError("Please select at least one artist before shuffling.");
      return;
    }

    setIsLoading(true);
    setError(null); // Clear any previous errors
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
    action: "play" | "pause" | "previous" | "next",
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

  const handleLogout = async () => {
    try {
      await spotifyApi.logout();
      setIsAuthenticated(false);
      setUserProfile(null);
      setSelectedArtists([]);
      setCurrentTrack(null);
      setShowControls(false);
    } catch (error) {
      console.error("Logout failed:", error);
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

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-black to-black"></div>

      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 animate-fade-in">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-spotify-green flex items-center justify-center group">
            <svg
              className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-300"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.84-.66 0-.359.24-.66.54-.78 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.242 1.021zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
          </div>
          <div className="animate-slide-in-left">
            <p className="text-xs uppercase tracking-[0.25em] text-spotify-text-subdued animate-pulse">
              ArtistBlender
            </p>
            <h1 className="text-xl font-semibold hover:text-spotify-green transition-colors duration-300">
              Blend your favorite artists
            </h1>
          </div>
        </div>
        <div className="flex items-center gap-3 animate-slide-in-right">
          {userProfile && (
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-black/80 rounded-full border border-white/10">
                <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-800 flex items-center justify-center">
                  {userProfile.profile_image ? (
                    <img
                      src={userProfile.profile_image}
                      alt={userProfile.display_name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <svg
                      className="w-5 h-5 text-spotify-text-subdued"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  )}
                </div>
                <span className="text-sm font-medium text-white truncate max-w-24">
                  {userProfile.display_name}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="p-2 rounded-full bg-black/80 border border-white/10 hover:bg-gray-900 hover:border-red-500/50 text-gray-400 hover:text-red-400 transition-all duration-300 group"
                title="Logout"
              >
                <svg
                  className="w-5 h-5 group-hover:scale-110 transition-transform duration-200"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </header>

      <main className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16 animate-fade-in-up">
        <div className="mb-10 flex flex-col gap-4">
          <h2 className="text-4xl font-semibold tracking-tight text-white">
            A simple, dynamic way to shuffle music
          </h2>
          <p className="max-w-2xl text-spotify-text-subdued">
            Search for artists, build a blend, and hit play. Everything you need
            is right here in one clean interface.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <section className="rounded-3xl bg-neutral-900/50 p-6 border border-white/5">
            <SearchContainer
              selectedArtists={selectedArtists}
              onArtistsChange={setSelectedArtists}
              onShuffle={handleShuffle}
              isLoading={isLoading}
              showControls={showControls}
            />
          </section>

          <aside className="rounded-3xl bg-neutral-900/50 p-6 border border-white/5">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Now playing</h3>
              {currentTrack && showControls && (
                <span className="flex items-center gap-2 text-xs font-medium text-spotify-green bg-spotify-green/10 px-3 py-1 rounded-full">
                  <span className="w-2 h-2 bg-spotify-green rounded-full animate-pulse"></span>
                  Live
                </span>
              )}
            </div>

            {currentTrack && showControls ? (
              <div className="mt-6">
                <AlbumCover
                  albumImageUrl={currentTrack.album_image_url}
                  trackName={currentTrack.track_name}
                  artistName={currentTrack.artist_name}
                />
                <div className="mt-4">
                  <PlaybackControls
                    isPlaying={currentTrack.is_playing}
                    onPlaybackAction={handlePlaybackAction}
                  />
                </div>
              </div>
            ) : (
              <div className="mt-6 text-center py-8">
                <p className="text-white/50 text-sm leading-relaxed">
                  Start a blend to see playback controls here.
                </p>
              </div>
            )}
          </aside>
        </div>
      </main>

      {error && <ErrorPopup message={error} onClose={() => setError(null)} />}
      {isLoading && <LoadingMessage />}
    </div>
  );
}

export default App;
