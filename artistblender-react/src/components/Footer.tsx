import React from "react";
import type { Track } from "../types";

interface FooterProps {
  currentTrack: Track | null;
  showControls: boolean;
}

export const Footer: React.FC<FooterProps> = ({
  currentTrack,
  showControls,
}) => {
  if (!showControls || !currentTrack) {
    return null;
  }

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-spotify-dark-gray border-t border-spotify-border-gray z-40">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Track Info */}
        <div className="flex items-center space-x-3 min-w-0 flex-1">
          <div className="w-14 h-14 bg-spotify-medium-gray rounded overflow-hidden flex-shrink-0">
            {currentTrack.album_image_url ? (
              <img
                src={currentTrack.album_image_url}
                alt={currentTrack.track_name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-spotify-text-subdued"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                </svg>
              </div>
            )}
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-white text-sm font-medium truncate">
              {currentTrack.track_name}
            </p>
            <p className="text-spotify-text-subdued text-xs truncate">
              {currentTrack.artist_name}
            </p>
          </div>
          <button className="text-spotify-text-subdued hover:text-white transition-colors p-2">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>

        {/* Center Controls */}
        <div className="flex items-center space-x-4">
          <button className="text-spotify-text-subdued hover:text-white transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
            </svg>
          </button>

          <button className="bg-white hover:bg-gray-200 text-black rounded-full p-2 transition-all duration-200">
            {currentTrack.is_playing ? (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            ) : (
              <svg
                className="w-4 h-4 ml-0.5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          <button className="text-spotify-text-subdued hover:text-white transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
            </svg>
          </button>
        </div>

        {/* Progress Bar */}
        <div className="flex-1 max-w-md mx-8 hidden md:block">
          <div className="w-full bg-spotify-medium-gray rounded-full h-1">
            <div
              className="bg-white h-1 rounded-full transition-all duration-300"
              style={{ width: "35%" }}
            ></div>
          </div>
        </div>

        {/* Volume Controls */}
        <div className="flex items-center space-x-3 min-w-0 flex-1 justify-end">
          <button className="text-spotify-text-subdued hover:text-white transition-colors hidden sm:block">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
            </svg>
          </button>
          <div className="w-20 bg-spotify-medium-gray rounded-full h-1 hidden sm:block">
            <div
              className="bg-white h-1 rounded-full"
              style={{ width: "60%" }}
            ></div>
          </div>
        </div>
      </div>
    </footer>
  );
};
