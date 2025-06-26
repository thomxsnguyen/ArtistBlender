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
    <div className="flex justify-center mt-16 animate-scale-in">
      <div className="text-center">
        <div className="relative group mb-8">
          <div className="absolute -inset-6 bg-gradient-to-r from-spotify-green via-blue-500 to-purple-500 rounded-3xl blur-3xl opacity-20 group-hover:opacity-60 transition-all duration-700 animate-pulse-slow"></div>
          <div className="absolute -inset-2 bg-gradient-to-r from-spotify-green/30 to-purple-500/30 rounded-3xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500 animate-pulse"></div>
          <div className="relative bg-spotify-glass backdrop-blur-sm p-6 rounded-3xl border border-white/20 group-hover:border-white/40 transition-all duration-500">
            <img
              id="album-cover"
              src={albumImageUrl}
              alt={`${trackName} by ${artistName}`}
              className="w-80 h-80 object-cover rounded-2xl shadow-2xl transition-all duration-700 group-hover:scale-105 group-hover:rotate-1 group-hover:shadow-spotify-green/30"
            />
            <div className="absolute inset-6 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
              <div className="p-6 text-left text-white w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="font-bold text-xl mb-2 truncate animate-slide-in-left">
                  {trackName}
                </p>
                <p
                  className="text-base text-gray-300 truncate animate-slide-in-left"
                  style={{ animationDelay: "0.1s" }}
                >
                  {artistName}
                </p>
                <div className="flex items-center mt-3 space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  <div className="w-2 h-2 bg-spotify-green rounded-full animate-pulse"></div>
                  <span className="text-xs text-gray-400">Now Playing</span>
                </div>
              </div>
            </div>

            {/* Floating music note particles */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-60 transition-opacity duration-500">
              <div className="text-spotify-green animate-bounce-subtle">♪</div>
            </div>
            <div className="absolute top-8 left-4 opacity-0 group-hover:opacity-40 transition-opacity duration-700 delay-100">
              <div
                className="text-blue-400 animate-bounce-subtle"
                style={{ animationDelay: "0.5s" }}
              >
                ♫
              </div>
            </div>
            <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-50 transition-opacity duration-600 delay-200">
              <div
                className="text-purple-400 animate-bounce-subtle"
                style={{ animationDelay: "1s" }}
              >
                ♪
              </div>
            </div>
          </div>
        </div>

        <div
          className="max-w-md mx-auto animate-slide-up"
          style={{ animationDelay: "0.3s" }}
        >
          <h3 className="text-3xl font-bold text-white mb-3 truncate hover:text-spotify-green transition-colors duration-300 cursor-default">
            {trackName}
          </h3>
          <p className="text-xl text-gray-400 font-medium truncate hover:text-gray-200 transition-colors duration-300">
            {artistName}
          </p>
          <div
            className="h-1 w-20 bg-gradient-to-r from-spotify-green via-blue-500 to-spotify-green-light mx-auto mt-6 rounded-full animate-shimmer"
            style={{ backgroundSize: "200% 100%" }}
          ></div>

          {/* Audio visualization bars */}
          <div className="flex justify-center space-x-1 mt-4 opacity-70">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-1 bg-gradient-to-t from-spotify-green to-spotify-green-light rounded-full animate-bounce-subtle"
                style={{
                  height: `${Math.random() * 16 + 8}px`,
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: "1s",
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
