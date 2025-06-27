import React from "react";
import type { UserProfile } from "../types";

interface HeaderProps {
  userProfile: UserProfile | null;
}

export const Header: React.FC<HeaderProps> = ({ userProfile }) => {
  return (
    <header className="sticky top-0 z-50 bg-spotify-black/95 backdrop-blur-md border-b border-spotify-border-gray">
      <div className="container mx-auto px-6 py-4">
        <div className="grid grid-cols-3 items-center w-full">
          {/* Left: Spotify Logo & Brand */}
          <div className="flex items-center space-x-3 justify-start">
            <div className="group flex items-center space-x-2 cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-spotify-green/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <svg
                  className="w-8 h-8 text-spotify-green relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.84-.66 0-.359.24-.66.54-.78 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.242 1.021zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-white group-hover:text-spotify-green transition-colors duration-300">
                ArtistBlender
              </span>
            </div>
            <div className="hidden lg:block">
              <span className="text-xs text-spotify-text-subdued bg-spotify-dark-gray hover:bg-spotify-medium-gray px-2 py-1 rounded-full transition-colors duration-200 cursor-pointer">
                Powered by{" "}
                <span className="text-spotify-green font-semibold">
                  Spotify
                </span>
              </span>
            </div>
          </div>

          {/* Center: Navigation */}
          <nav className="hidden md:flex items-center justify-center space-x-6">
            <button className="group relative text-white hover:text-spotify-green transition-all duration-300 text-sm font-medium px-3 py-2 rounded-full hover:bg-spotify-medium-gray/50">
              <span className="relative z-10">Home</span>
              <div className="absolute inset-0 bg-spotify-green/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-spotify-green group-hover:w-full transition-all duration-300"></div>
            </button>
            <button className="group relative text-spotify-text-subdued hover:text-spotify-green transition-all duration-300 text-sm font-medium px-3 py-2 rounded-full hover:bg-spotify-medium-gray/50">
              <span className="relative z-10">Search</span>
              <div className="absolute inset-0 bg-spotify-green/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-spotify-green group-hover:w-full transition-all duration-300"></div>
            </button>
            <button className="group relative text-spotify-text-subdued hover:text-spotify-green transition-all duration-300 text-sm font-medium px-3 py-2 rounded-full hover:bg-spotify-medium-gray/50">
              <span className="relative z-10">Your Library</span>
              <div className="absolute inset-0 bg-spotify-green/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-spotify-green group-hover:w-full transition-all duration-300"></div>
            </button>
          </nav>

          {/* Right: User Profile */}
          <div className="flex items-center space-x-4 justify-end">
            {userProfile ? (
              <div className="flex items-center space-x-3 bg-spotify-dark-gray/50 hover:bg-spotify-dark-gray transition-colors duration-200 rounded-full px-3 py-2 cursor-pointer">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-spotify-green to-spotify-green-light flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">
                    {userProfile.display_name?.charAt(0) || "U"}
                  </span>
                </div>
                <div className="hidden sm:block">
                  <p className="text-white text-sm font-medium">
                    {userProfile.display_name || "User"}
                  </p>
                  <p className="text-spotify-text-subdued text-xs">
                    Premium User
                  </p>
                </div>
                <svg
                  className="w-4 h-4 text-spotify-text-subdued"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-spotify-medium-gray animate-pulse"></div>
                <div className="hidden sm:block">
                  <div className="w-20 h-4 bg-spotify-medium-gray rounded animate-pulse"></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
