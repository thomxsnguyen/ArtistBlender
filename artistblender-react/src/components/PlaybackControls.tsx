import React from "react";
import { Play, Pause, SkipBack, SkipForward } from "lucide-react";

interface PlaybackControlsProps {
  isPlaying: boolean;
  onPlaybackAction: (action: "play" | "pause" | "previous" | "next") => void;
}

export const PlaybackControls: React.FC<PlaybackControlsProps> = ({
  isPlaying,
  onPlaybackAction,
}) => {
  return (
    <div className="flex justify-center items-center mt-12 space-x-8 animate-slide-up">
      <div className="relative group">
        <div className="absolute inset-0 bg-spotify-glass backdrop-blur-xl rounded-full border border-white/20 group-hover:border-spotify-green/50 transition-all duration-300"></div>
        <div className="absolute -inset-1 bg-gradient-to-r from-spotify-green/20 to-blue-500/20 rounded-full blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
        <button
          onClick={() => onPlaybackAction("previous")}
          className="relative w-16 h-16 rounded-full text-white hover:text-spotify-green transition-all duration-300 flex items-center justify-center hover:scale-125 active:scale-90 group-hover:rotate-12"
          aria-label="Previous track"
        >
          <SkipBack size={24} className="group-hover:animate-wiggle" />
        </button>
      </div>

      <div className="relative group">
        <div className="absolute -inset-3 bg-gradient-to-r from-spotify-green via-blue-500 to-spotify-green-light rounded-full blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500 animate-pulse-slow"></div>
        <div className="absolute -inset-1 bg-gradient-to-r from-spotify-green to-spotify-green-light rounded-full opacity-80 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
        <button
          onClick={() => onPlaybackAction(isPlaying ? "pause" : "play")}
          className="relative w-24 h-24 rounded-full bg-gradient-to-r from-spotify-green to-spotify-green-light text-white hover:scale-125 active:scale-95 transition-all duration-400 flex items-center justify-center shadow-2xl shadow-spotify-green/60 hover:shadow-spotify-green/80 group-hover:animate-heartbeat"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full transform rotate-45 group-hover:rotate-[225deg] transition-transform duration-1000"></div>
          {isPlaying ? (
            <Pause
              size={32}
              className="relative z-10 group-hover:animate-pulse"
            />
          ) : (
            <Play
              size={32}
              className="ml-1 relative z-10 group-hover:animate-bounce"
            />
          )}
        </button>
      </div>

      <div className="relative group">
        <div className="absolute inset-0 bg-spotify-glass backdrop-blur-xl rounded-full border border-white/20 group-hover:border-spotify-green/50 transition-all duration-300"></div>
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-spotify-green/20 rounded-full blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
        <button
          onClick={() => onPlaybackAction("next")}
          className="relative w-16 h-16 rounded-full text-white hover:text-spotify-green transition-all duration-300 flex items-center justify-center hover:scale-125 active:scale-90 group-hover:-rotate-12"
          aria-label="Next track"
        >
          <SkipForward size={24} className="group-hover:animate-wiggle" />
        </button>
      </div>
    </div>
  );
};
