import React from "react";

interface PlaybackControlsProps {
  isPlaying: boolean;
  onPlaybackAction: (action: "play" | "pause" | "previous" | "next") => void;
}

export const PlaybackControls: React.FC<PlaybackControlsProps> = ({
  isPlaying,
  onPlaybackAction,
}) => {
  return (
    <div className="flex items-center justify-center space-x-6 mb-8 animate-fade-in-up animation-delay-200">
      {/* Previous Button */}
      <button
        onClick={() => onPlaybackAction("previous")}
        className="text-spotify-text-subdued hover:text-white transition-colors duration-200 p-2 hover:bg-spotify-medium-gray rounded-full"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
        </svg>
      </button>

      {/* Play/Pause Button */}
      <button
        onClick={() => onPlaybackAction(isPlaying ? "pause" : "play")}
        className="bg-white hover:bg-gray-200 text-black rounded-full p-4 transition-all duration-200 hover:scale-105 shadow-lg"
      >
        {isPlaying ? (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>
        ) : (
          <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>

      {/* Next Button */}
      <button
        onClick={() => onPlaybackAction("next")}
        className="text-spotify-text-subdued hover:text-white transition-colors duration-200 p-2 hover:bg-spotify-medium-gray rounded-full"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
        </svg>
      </button>
    </div>
  );
};
