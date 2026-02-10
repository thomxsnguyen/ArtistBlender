import React from "react";

export const LoadingMessage: React.FC = () => {
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center animate-overlay-fade-in">
      {/* Modern gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/90 to-black/95 backdrop-blur-xl"></div>

      {/* Floating orbs for ambient effect */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-spotify-green/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-spotify-green/10 rounded-full blur-2xl animate-float-delayed"></div>

      {/* Main modal */}
      <div className="relative animate-modal-slide-up flex items-center justify-center">
        {/* Glass morphism container */}
        <div className="relative w-full max-w-md mx-4 rounded-[2.5rem] bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_40px_120px_rgba(0,0,0,0.7)] overflow-hidden">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10 pointer-events-none"></div>

          <div className="px-8 py-12 flex flex-col items-center justify-center text-center">
            {/* Status text */}
            <div className="animate-text-shimmer">
              <p className="text-xs font-medium uppercase tracking-[0.4em] text-spotify-green mb-4 animate-pulse">
                M I X I N G &nbsp; N O W
              </p>
            </div>

            {/* Main title */}
            <h2 className="text-3xl font-bold bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent mb-4 animate-title-glow">
              Crafting your blend
            </h2>

            {/* Description */}
            <p className="text-gray-300 text-base leading-relaxed animate-fade-in-delayed">
              Curating tracks that match your selected artists.
            </p>

            {/* Modern loading animation */}
            <div className="mt-8 flex items-center justify-center">
              <div className="flex gap-1">
                <div className="w-1 h-8 bg-gradient-to-t from-spotify-green/60 to-spotify-green rounded-full animate-wave-1"></div>
                <div className="w-1 h-6 bg-gradient-to-t from-spotify-green/60 to-spotify-green rounded-full animate-wave-2"></div>
                <div className="w-1 h-10 bg-gradient-to-t from-spotify-green/60 to-spotify-green rounded-full animate-wave-3"></div>
                <div className="w-1 h-4 bg-gradient-to-t from-spotify-green/60 to-spotify-green rounded-full animate-wave-4"></div>
                <div className="w-1 h-7 bg-gradient-to-t from-spotify-green/60 to-spotify-green rounded-full animate-wave-5"></div>
                <div className="w-1 h-5 bg-gradient-to-t from-spotify-green/60 to-spotify-green rounded-full animate-wave-6"></div>
                <div className="w-1 h-9 bg-gradient-to-t from-spotify-green/60 to-spotify-green rounded-full animate-wave-7"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
