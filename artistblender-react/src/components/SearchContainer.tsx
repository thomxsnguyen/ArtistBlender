import React, { useState, useEffect } from "react";
import { X, Sparkles } from "lucide-react";
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
  showControls,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Artist[]>([]);
  const [topArtists, setTopArtists] = useState<Artist[]>([]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    loadTopArtists();
  }, []);

  const loadTopArtists = async () => {
    try {
      const artists = await spotifyApi.getTopArtists();
      setTopArtists(artists);
    } catch (error) {
      console.error("Error loading top artists:", error);
    }
  };

  const handleSearch = async (query: string) => {
    setSearchQuery(query);

    if (query.trim() === "") {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    try {
      const response = await spotifyApi.searchArtists(query);
      setSearchResults(response.artists);
      setShowResults(true);
    } catch (error) {
      console.error("Error searching artists:", error);
      setSearchResults([]);
    }
  };

  const toggleArtist = (artist: Artist) => {
    const isSelected = selectedArtists.some((a) => a.id === artist.id);

    if (isSelected) {
      onArtistsChange(selectedArtists.filter((a) => a.id !== artist.id));
    } else {
      onArtistsChange([...selectedArtists, artist]);
    }

    // Clear search after selection
    setSearchQuery("");
    setSearchResults([]);
    setShowResults(false);
  };

  const removeArtist = (artistId: string) => {
    onArtistsChange(selectedArtists.filter((a) => a.id !== artistId));
  };

  const shouldShowTopArtists =
    !showControls && searchQuery === "" && !showResults;

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 animate-slide-up">
      {/* Search Bar with Selected Artists Pills */}
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-spotify-glass to-spotify-glass backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl group-hover:shadow-3xl transition-all duration-500"></div>
        <div className="absolute -inset-1 bg-gradient-to-r from-spotify-green/20 via-blue-500/20 to-purple-500/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative flex flex-wrap items-center p-4 min-h-[64px] overflow-x-auto overflow-y-hidden">
          {selectedArtists.map((artist, index) => (
            <div
              key={artist.id}
              className="inline-flex items-center bg-gradient-to-r from-spotify-green to-spotify-green-light text-white px-4 py-2 m-1 rounded-full text-sm font-medium cursor-pointer shadow-lg shadow-spotify-green/30 hover:shadow-spotify-green/60 transition-all duration-300 hover:scale-110 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Sparkles size={14} className="mr-2 animate-pulse" />
              <span className="mr-2">{artist.name}</span>
              <button
                onClick={() => removeArtist(artist.id)}
                className="w-5 h-5 rounded-full bg-white/20 hover:bg-red-500 text-white hover:text-white transition-all duration-200 flex items-center justify-center hover:rotate-90"
              >
                <X size={12} />
              </button>
            </div>
          ))}

          <div className="flex-1 min-w-[200px] relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search for your favorite artists..."
              className="w-full border-none bg-transparent text-white placeholder-gray-400 outline-none text-base pl-2 font-light focus:placeholder-transparent transition-all duration-300"
              autoComplete="off"
            />
            {searchQuery === "" && (
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 animate-pulse">
                <Sparkles size={16} />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Search Results Dropdown */}
      {showResults && searchResults.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 z-50 animate-slide-up">
          <div className="bg-spotify-glass backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl overflow-hidden max-h-80 overflow-y-auto">
            {searchResults.map((artist, index) => (
              <div
                key={artist.id}
                onClick={() => toggleArtist(artist)}
                className={`p-4 cursor-pointer text-white hover:bg-gradient-to-r hover:from-spotify-green hover:to-spotify-green-light transition-all duration-300 hover:scale-[1.02] hover:shadow-lg animate-fade-in ${
                  index !== searchResults.length - 1
                    ? "border-b border-white/10"
                    : ""
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-center group">
                  <div className="w-2 h-2 bg-spotify-green rounded-full mr-3 opacity-60 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-300"></div>
                  <span className="font-medium group-hover:translate-x-1 transition-transform duration-200">
                    {artist.name}
                  </span>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="w-6 h-6 rounded-full bg-spotify-green/20 flex items-center justify-center">
                      <span className="text-xs font-bold">+</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Top Artists (show when not in playback mode and no search) */}
      {shouldShowTopArtists && topArtists.length > 0 && (
        <div className="mt-12 animate-slide-up">
          <h2 className="text-center text-2xl font-semibold text-white mb-8 animate-fade-in">
            Your Top Artists
          </h2>
          <div className="flex justify-center flex-wrap gap-8">
            {topArtists.map((artist, index) => (
              <div
                key={artist.id}
                onClick={() => toggleArtist(artist)}
                className="group cursor-pointer transition-all duration-500 hover:scale-110 animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative">
                  {artist.image && (
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-spotify-green via-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-sm animate-pulse"></div>
                      <img
                        src={artist.image}
                        alt={artist.name}
                        className="relative w-36 h-36 rounded-full object-cover ring-4 ring-white/20 group-hover:ring-spotify-green transition-all duration-500 shadow-2xl group-hover:shadow-spotify-green/50"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-spotify-green/30 via-transparent to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 shadow-lg">
                          <Sparkles className="text-spotify-green w-5 h-5" />
                        </div>
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-spotify-green rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center animate-bounce">
                        <span className="text-white text-xs font-bold">+</span>
                      </div>
                    </div>
                  )}
                  <p className="text-center mt-4 text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300 group-hover:transform group-hover:scale-105">
                    {artist.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Shuffle Button */}
      {selectedArtists.length > 0 && (
        <div className="flex justify-center mt-12 animate-scale-in">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-spotify-green via-blue-500 to-purple-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-pulse"></div>
            <button
              onClick={onShuffle}
              disabled={isLoading}
              className={`relative px-10 py-5 text-lg font-bold text-white border-none rounded-full font-inter transition-all duration-500 shadow-2xl overflow-hidden ${
                isLoading
                  ? "bg-spotify-green cursor-not-allowed opacity-70"
                  : "bg-gradient-to-r from-spotify-green to-spotify-green-light hover:shadow-spotify-green/70 hover:scale-110 cursor-pointer hover:from-spotify-green-light hover:to-spotify-green"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <div className="relative flex items-center">
                {isLoading ? (
                  <>
                    <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                    <span className="animate-pulse">
                      Creating your perfect mix...
                    </span>
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-3 w-5 h-5 animate-pulse" />
                    <span className="group-hover:animate-bounce">
                      Shuffle & Play
                    </span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="ml-3 group-hover:translate-x-1 transition-transform duration-300"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </>
                )}
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
