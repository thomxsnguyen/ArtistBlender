import React, { useState, useEffect, useRef } from "react";
import { spotifyApi } from "../utils/api";
import type { Artist } from "../types";

interface SearchContainerProps {
  selectedArtists: Artist[];
  onArtistsChange: (artists: Artist[]) => void;
  onShuffle: () => void;
  isLoading: boolean;
  showControls: boolean;
}

export const SearchContainer: React.FC<SearchContainerProps> = ({
  selectedArtists,
  onArtistsChange,
  onShuffle,
  isLoading,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Artist[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const searchTimeoutRef = useRef<NodeJS.Timeout>();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    if (searchQuery.trim()) {
      setIsSearching(true);
      searchTimeoutRef.current = setTimeout(async () => {
        try {
          const results = await spotifyApi.searchArtists(searchQuery);
          setSearchResults(results.artists);
          setShowDropdown(true);
        } catch (error) {
          console.error("Search error:", error);
          setSearchResults([]);
        } finally {
          setIsSearching(false);
        }
      }, 300);
    } else {
      setSearchResults([]);
      setShowDropdown(false);
      setIsSearching(false);
    }

    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, [searchQuery]);

  const handleArtistSelect = (artist: Artist) => {
    if (!selectedArtists.some((a) => a.id === artist.id)) {
      onArtistsChange([...selectedArtists, artist]);
    }
    setSearchQuery("");
    setShowDropdown(false);
  };

  const handleRemoveArtist = (artistId: string) => {
    onArtistsChange(selectedArtists.filter((a) => a.id !== artistId));
  };

  const clearSearch = () => {
    setSearchQuery("");
    setShowDropdown(false);
    setSearchResults([]);
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Search Section */}
      <div className="relative mb-8" ref={dropdownRef}>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-spotify-text-subdued"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for artists..."
            className="w-full pl-12 pr-12 py-3.5 bg-spotify-black text-white placeholder-spotify-text-subdued rounded-full border border-spotify-border-gray focus:outline-none focus:border-spotify-green/50 focus:ring-0 selection:bg-spotify-green/20 selection:text-white transition-all duration-200 text-base"
          />
          {searchQuery && (
            <button
              onClick={clearSearch}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-white hover:text-spotify-green transition-all duration-200 hover:scale-110 active:scale-95"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
          {isSearching && (
            <div className="absolute inset-y-0 right-12 flex items-center">
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-spotify-green border-t-transparent"></div>
            </div>
          )}
        </div>

        {/* Search Results Dropdown */}
        {showDropdown && searchResults.length > 0 && (
          <div className="mt-3 bg-spotify-dark-gray/95 backdrop-blur-xl border border-spotify-border-gray rounded-2xl shadow-[0_25px_50px_rgba(0,0,0,0.6)] max-h-80 overflow-y-auto animate-modal-slide-up">
            {searchResults.map((artist, index) => (
              <button
                key={artist.id}
                onClick={() => handleArtistSelect(artist)}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-spotify-medium-gray/70 transition-all duration-300 text-left group hover:scale-[1.02] transform-gpu"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-spotify-medium-gray flex items-center justify-center overflow-hidden">
                  {artist.image ? (
                    <img
                      src={artist.image}
                      alt={artist.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <svg
                      className="w-6 h-6 text-spotify-text-subdued"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-medium truncate">
                    {artist.name}
                  </p>
                  <p className="text-spotify-text-subdued text-xs tracking-wide">
                    Artist
                  </p>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Selected Artists */}
      {selectedArtists.length > 0 && (
        <div className="mb-8 animate-fade-in-up">
          <h3 className="text-lg font-semibold text-white mb-4 animate-title-glow">
            Selected Artists ({selectedArtists.length})
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {selectedArtists.map((artist, index) => (
              <div
                key={artist.id}
                className="group relative bg-spotify-dark-gray hover:bg-spotify-medium-gray rounded-lg p-4 transition-all duration-300 hover:shadow-lg hover:scale-105 animate-scale-in transform-gpu"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="pointer-events-none absolute inset-0 rounded-lg bg-spotify-green/10" />
                <div className="relative z-10 aspect-square rounded-lg bg-spotify-medium-gray mb-3 overflow-hidden">
                  {artist.image ? (
                    <img
                      src={artist.image}
                      alt={artist.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <svg
                        className="w-12 h-12 text-spotify-text-subdued"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveArtist(artist.id);
                      }}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-red-400 hover:text-red-300"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
                <p className="relative z-10 text-white font-medium text-sm truncate">
                  {artist.name}
                </p>
                <p className="relative z-10 text-spotify-text-subdued text-xs">
                  Artist
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Shuffle Button */}
      {selectedArtists.length > 0 && (
        <div className="text-center animate-fade-in-up animation-delay-300">
          <button
            onClick={onShuffle}
            disabled={isLoading}
            className="group relative inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-black font-semibold py-3 px-6 rounded-full text-base transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg hover:shadow-xl"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-2 border-black border-t-transparent"></div>
                <span>Creating your mix...</span>
              </>
            ) : (
              <>
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span>Shuffle & Play</span>
              </>
            )}
          </button>
          <p className="text-spotify-text-subdued text-sm mt-3">
            Create a personalized mix from {selectedArtists.length} selected
            artist{selectedArtists.length !== 1 ? "s" : ""}
          </p>
        </div>
      )}

      {/* Empty State */}
      {selectedArtists.length === 0 && !searchQuery && !isSearching && (
        <div className="text-center py-20 animate-fade-in-up">
          <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-white/5 flex items-center justify-center backdrop-blur-sm">
            <svg
              className="w-9 h-9 text-white/60"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-white mb-3">
            Start by searching for artists
          </h3>
          <p className="text-white/60 text-base max-w-md mx-auto leading-relaxed">
            Find your favorite artists and create a personalized music mix. Search above to get started.
          </p>
        </div>
      )}
    </div>
  );
};
