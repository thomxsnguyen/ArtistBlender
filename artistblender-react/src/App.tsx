import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { SearchContainer } from "./components/SearchContainer";
import { AlbumCover } from "./components/AlbumCover";
import { PlaybackControls } from "./components/PlaybackControls";
import { Footer } from "./components/Footer";
import { ErrorPopup } from "./components/ErrorPopup";
import { LoadingMessage } from "./components/LoadingMessage";
import { ParticleSystem } from "./components/ParticleSystem";
import { spotifyApi } from "./utils/api";
import type { Artist, Track, UserProfile } from "./types";

function App() {
  const [selectedArtists, setSelectedArtists] = useState<Artist[]>([]);
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    initializeApp();
  }, []);

  const initializeApp = async () => {
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
        // Clear selected artists after successful shuffle
        setSelectedArtists([]);
        // Refresh current track info
        setTimeout(() => {
          initializeApp();
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
      // Refresh track info after playback action
      setTimeout(() => {
        initializeApp();
      }, 500);
    } catch (error) {
      console.error(`Error with ${action} action:`, error);
    }
  };

  return (
    <div className="min-h-screen text-white font-inter relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-spotify-green opacity-10 rounded-full blur-3xl animate-float neon-glow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 opacity-10 rounded-full blur-3xl animate-float-delay neon-glow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500 opacity-5 rounded-full blur-3xl animate-pulse-slow"></div>

        {/* Floating particles */}
        <div className="absolute top-32 left-1/4 w-2 h-2 bg-spotify-green rounded-full opacity-60 animate-bounce-subtle"></div>
        <div
          className="absolute top-64 right-1/4 w-3 h-3 bg-blue-400 rounded-full opacity-40 animate-bounce-subtle"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/3 w-1 h-1 bg-purple-400 rounded-full opacity-70 animate-bounce-subtle"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-48 right-1/3 w-2 h-2 bg-pink-400 rounded-full opacity-50 animate-bounce-subtle"
          style={{ animationDelay: "0.5s" }}
        ></div>

        {/* Gradient overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-transparent via-spotify-green/5 to-blue-500/5 animate-gradient-shift"
          style={{ backgroundSize: "400% 400%" }}
        ></div>

        {/* Particle System */}
        <ParticleSystem />
      </div>

      <Header userProfile={userProfile} />

      <div className="flex flex-col items-center relative z-10">
        <div className="text-center mt-16 mb-12">
          <div className="mb-6 animate-scale-in">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-spotify-green to-spotify-green-light rounded-full mb-6 shadow-2xl shadow-spotify-green/40 animate-glow hover:animate-heartbeat transition-all duration-500 cursor-pointer">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-white animate-wiggle hover:animate-none"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
          </div>
          <h1
            className="text-7xl font-bold bg-gradient-to-r from-white via-gray-100 to-spotify-green bg-clip-text text-transparent mb-6 leading-tight animate-slide-up hover:animate-shimmer transition-all duration-300"
            style={{ backgroundSize: "200% 200%" }}
          >
            ArtistBlender
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-spotify-green to-spotify-green-light mx-auto mb-6 animate-slide-up-delay rounded-full"></div>
          <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed animate-fade-in-delay">
            Discover the perfect harmony of your favorite artists in one
            seamless playlist
          </p>
        </div>

        <SearchContainer
          selectedArtists={selectedArtists}
          onArtistsChange={setSelectedArtists}
          onShuffle={handleShuffle}
          isLoading={isLoading}
          showControls={showControls}
        />

        {currentTrack && showControls && (
          <>
            <AlbumCover
              albumImageUrl={currentTrack.album_image_url}
              trackName={currentTrack.track_name}
              artistName={currentTrack.artist_name}
            />
            <PlaybackControls
              isPlaying={currentTrack.is_playing}
              onPlaybackAction={handlePlaybackAction}
            />
          </>
        )}

        <Footer currentTrack={currentTrack} showControls={showControls} />
      </div>

      {error && <ErrorPopup message={error} onClose={() => setError(null)} />}

      {isLoading && <LoadingMessage />}
    </div>
  );
}

export default App;
