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
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 animate-slide-up">
      <div className="absolute inset-0 bg-spotify-glass backdrop-blur-2xl border-t border-white/10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-spotify-green/5 via-transparent to-blue-500/5 opacity-30"></div>
      <div className="relative p-6 text-center">
        {showControls && currentTrack ? (
          <div className="flex items-center justify-center space-x-4 animate-fade-in">
            <div className="flex space-x-1">
              <div className="w-1 h-4 bg-spotify-green rounded-full animate-bounce-subtle"></div>
              <div
                className="w-1 h-6 bg-spotify-green-light rounded-full animate-bounce-subtle"
                style={{ animationDelay: "0.1s" }}
              ></div>
              <div
                className="w-1 h-3 bg-blue-400 rounded-full animate-bounce-subtle"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="w-1 h-5 bg-spotify-green rounded-full animate-bounce-subtle"
                style={{ animationDelay: "0.3s" }}
              ></div>
            </div>
            <span className="text-white font-medium">
              <span className="text-spotify-green animate-pulse">♪</span> Now
              playing:{" "}
              <a
                href={currentTrack.track_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-spotify-green hover:text-spotify-green-light transition-colors font-semibold hover:underline magnetic-button"
              >
                {currentTrack.track_name}
              </a>
              {" by "}
              <span className="text-gray-300 hover:text-white transition-colors">
                {currentTrack.artist_name}
              </span>
            </span>
            <div className="flex space-x-1">
              <div
                className="w-1 h-5 bg-purple-400 rounded-full animate-bounce-subtle"
                style={{ animationDelay: "0.4s" }}
              ></div>
              <div
                className="w-1 h-3 bg-blue-500 rounded-full animate-bounce-subtle"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="w-1 h-6 bg-spotify-green-light rounded-full animate-bounce-subtle"
                style={{ animationDelay: "0.6s" }}
              ></div>
              <div
                className="w-1 h-4 bg-spotify-green rounded-full animate-bounce-subtle"
                style={{ animationDelay: "0.7s" }}
              ></div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center space-x-3 animate-fade-in">
            <div className="w-3 h-3 border-2 border-gray-500 rounded-full animate-pulse"></div>
            <span className="text-gray-400 font-light">
              Ready to discover new music
            </span>
            <div className="text-gray-600 animate-bounce-subtle">🎵</div>
          </div>
        )}
      </div>
    </div>
  );
};
