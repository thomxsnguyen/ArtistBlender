import React from "react";

export const LoadingMessage: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-spotify-glass-dark backdrop-blur-xl flex items-center justify-center z-40 animate-fade-in">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-spotify-green/20 to-blue-500/20 rounded-2xl blur-xl"></div>
        <div className="relative bg-spotify-glass backdrop-blur-2xl p-8 rounded-2xl shadow-2xl border border-white/20">
          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              <div className="w-12 h-12 border-4 border-spotify-green/30 rounded-full"></div>
              <div className="absolute inset-0 w-12 h-12 border-4 border-transparent border-t-spotify-green rounded-full animate-spin"></div>
            </div>
            <div className="text-center">
              <p className="text-white text-lg font-medium mb-1">
                Creating Your Mix
              </p>
              <p className="text-gray-400 text-sm">
                Blending your favorite artists...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
