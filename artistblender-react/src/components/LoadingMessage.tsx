import React from "react";

export const LoadingMessage: React.FC = () => {
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/65 backdrop-blur-sm">
      <div className="relative w-full max-w-sm rounded-3xl border border-spotify-border-gray bg-spotify-dark-gray px-8 py-10 shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
        <div className="absolute -top-10 left-1/2 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-2xl bg-spotify-green text-black shadow-[0_12px_28px_rgba(29,185,84,0.5)]">
          <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
          </svg>
        </div>

        <div className="pt-6 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-spotify-text-subdued">
            Mixing now
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-white">
            Crafting your blend
          </h2>
          <p className="mt-2 text-sm text-spotify-text-subdued">
            Curating tracks that match your selected artists.
          </p>

          <div className="mt-6 flex items-center justify-center gap-2">
            <span className="h-2 w-2 animate-loading-bounce rounded-full bg-spotify-green"></span>
            <span
              className="h-2 w-2 animate-loading-bounce rounded-full bg-spotify-green"
              style={{ animationDelay: "0.2s" }}
            ></span>
            <span
              className="h-2 w-2 animate-loading-bounce rounded-full bg-spotify-green"
              style={{ animationDelay: "0.4s" }}
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
};
