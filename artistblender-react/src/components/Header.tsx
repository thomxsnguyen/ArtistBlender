import React from "react";
import type { UserProfile } from "../types";

interface HeaderProps {
  userProfile: UserProfile | null;
}

export const Header: React.FC<HeaderProps> = ({ userProfile }) => {
  return (
    <header className="relative">
      <div className="absolute inset-0 bg-spotify-glass backdrop-blur-md border-b border-white/10"></div>
      <div className="relative flex justify-between items-center p-6">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gradient-to-r from-spotify-green to-spotify-green-light rounded-full flex items-center justify-center mr-4 shadow-lg shadow-spotify-green/30">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-white"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-white m-0">
              ArtistBlender
            </h1>
            <p className="text-sm text-gray-400 m-0">for Spotify</p>
          </div>
        </div>

        {userProfile && userProfile.profile_image && (
          <div className="flex items-center bg-spotify-glass backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
            <img
              src={userProfile.profile_image}
              alt={userProfile.display_name}
              className="w-8 h-8 rounded-full mr-3 ring-2 ring-spotify-green/50"
            />
            <span className="text-sm text-white font-medium">
              {userProfile.display_name}
            </span>
          </div>
        )}
      </div>
    </header>
  );
};
