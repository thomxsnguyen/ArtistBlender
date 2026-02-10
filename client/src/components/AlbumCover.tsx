import React from "react";

interface AlbumCoverProps {
  albumImageUrl: string;
  trackName: string;
  artistName: string;
}

export const AlbumCover: React.FC<AlbumCoverProps> = ({
  albumImageUrl,
  trackName,
  artistName,
}) => {
  return (
    <div className="text-center mb-8 animate-fade-in-up">
      <div className="relative mx-auto mb-6 group">
        <div className="w-80 h-80 mx-auto relative overflow-hidden rounded-lg shadow-2xl">
          <img
            src={albumImageUrl}
            alt={`${trackName} by ${artistName}`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Playing indicator */}
          <div className="absolute bottom-4 right-4 bg-spotify-green text-black px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-2 shadow-lg">
            <div className="flex space-x-1">
              <div className="w-1 h-3 bg-current animate-bounce"></div>
              <div className="w-1 h-4 bg-current animate-bounce animation-delay-100"></div>
              <div className="w-1 h-2 bg-current animate-bounce animation-delay-200"></div>
            </div>
            <span>Playing</span>
          </div>
        </div>

        {/* Glow effect */}
        <div className="absolute inset-0 -z-10 bg-spotify-green/20 blur-3xl rounded-full opacity-50 animate-soft-glow"></div>
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-white truncate max-w-md mx-auto">
          {trackName}
        </h2>
        <p className="text-lg text-spotify-text-subdued font-medium">
          {artistName}
        </p>
      </div>
    </div>
  );
};
