import React from "react";

export const LoadingMessage: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-xl flex items-center justify-center z-40 animate-fade-in overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-spotify-green/20 rounded-full blur-xl animate-particle-float"></div>
        <div
          className="absolute top-1/3 right-1/4 w-20 h-20 bg-spotify-electric-blue/25 rounded-full blur-lg animate-particle-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/3 w-28 h-28 bg-spotify-hot-pink/20 rounded-full blur-xl animate-particle-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/3 w-16 h-16 bg-spotify-lime-green/30 rounded-full blur-lg animate-particle-float"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/6 w-18 h-18 bg-spotify-sunset-orange/25 rounded-full blur-lg animate-particle-float"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="relative z-10 animate-slide-up">
        {/* Enhanced Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-spotify-green/15 via-spotify-electric-blue/10 to-spotify-hot-pink/15 rounded-3xl blur-2xl animate-colorful-glow"></div>

        <div className="relative bg-gradient-to-br from-spotify-dark-gray/90 via-spotify-medium-gray/80 to-spotify-dark-gray/90 backdrop-blur-2xl p-12 rounded-3xl shadow-2xl border border-white/10">
          <div className="flex flex-col items-center space-y-8">
            {/* ArtistBlender Logo Section */}
            <div className="text-center mb-4">
              <div className="relative mb-4">
                <div className="absolute inset-0 animate-rainbow-pulse rounded-full blur-lg opacity-40"></div>
                <svg
                  className="w-16 h-16 mx-auto text-spotify-green relative z-10 drop-shadow-xl animate-gentle-bounce"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.84-.66 0-.359.24-.66.54-.78 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.242 1.021zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
              </div>
              <h2 className="text-3xl text-white mb-2 tracking-tight">
                ArtistBlender
              </h2>
              <p className="text-spotify-text-subdued text-sm font-medium">
                Powered by{" "}
                <span className="text-spotify-green font-semibold">
                  Spotify
                </span>
              </p>
            </div>

            {/* Enhanced Loading Spinner */}
            <div className="relative">
              {/* Outer spinning ring */}
              <div className="w-20 h-20 border-4 border-transparent rounded-full animate-spin">
                <div className="absolute inset-0 border-4 border-transparent border-t-spotify-green border-r-spotify-electric-blue border-b-spotify-hot-pink border-l-spotify-lime-green rounded-full"></div>
              </div>

              {/* Inner pulsing core */}
              <div className="absolute inset-4 bg-gradient-to-r from-spotify-green/30 to-spotify-electric-blue/30 rounded-full animate-pulse-slow"></div>

              {/* Center music note */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white animate-gentle-bounce"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                </svg>
              </div>
            </div>

            {/* Loading Text with Animation */}
            <div className="text-center space-y-3">
              <p className="text-white text-xl font-bold mb-2 animate-fade-in-up">
                <span className="bg-gradient-to-r from-spotify-green to-spotify-electric-blue bg-clip-text text-transparent">
                  Creating Your Mix
                </span>
              </p>
              <p
                className="text-spotify-text-subdued text-base font-medium animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                Blending your favorite artists into the perfect playlist...
              </p>

              {/* Progress Dots */}
              <div className="flex justify-center space-x-2 mt-4">
                <div className="w-2 h-2 bg-spotify-green rounded-full animate-loading-bounce"></div>
                <div
                  className="w-2 h-2 bg-spotify-electric-blue rounded-full animate-loading-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-spotify-hot-pink rounded-full animate-loading-bounce"
                  style={{ animationDelay: "0.4s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-spotify-lime-green rounded-full animate-loading-bounce"
                  style={{ animationDelay: "0.6s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-spotify-sunset-orange rounded-full animate-loading-bounce"
                  style={{ animationDelay: "0.8s" }}
                ></div>
              </div>
            </div>

            {/* Musical Notes Animation */}
            <div className="absolute -top-4 -left-4 text-spotify-green/40 animate-float">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
              </svg>
            </div>
            <div
              className="absolute -top-2 -right-6 text-spotify-electric-blue/40 animate-float"
              style={{ animationDelay: "1s" }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
              </svg>
            </div>
            <div
              className="absolute -bottom-3 -left-6 text-spotify-hot-pink/40 animate-float"
              style={{ animationDelay: "2s" }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
              </svg>
            </div>
            <div
              className="absolute -bottom-4 -right-4 text-spotify-lime-green/40 animate-float"
              style={{ animationDelay: "0.5s" }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
