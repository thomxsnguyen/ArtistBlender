import React, { useState, useEffect } from "react";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ease-out ${
        isScrolled ? "pt-4" : "pt-6"
      }`}
    >
      <div
        className={`flex items-center justify-between transition-all duration-500 ease-out ${
          isScrolled
            ? "bg-black/70 backdrop-blur-2xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.4)] rounded-full px-10 py-3 w-[900px]"
            : "bg-transparent border border-transparent rounded-full px-12 py-4 w-[1000px]"
        }`}
      >
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => (window.location.href = "/")}
        >
          <div
            className={`rounded-full bg-spotify-green/20 text-spotify-green flex items-center justify-center transition-all duration-500 ${
              isScrolled ? "h-8 w-8" : "h-10 w-10"
            } hover:bg-spotify-green/30 hover:scale-110`}
          >
            <svg
              className={`transition-all duration-500 ${isScrolled ? "h-4 w-4" : "h-5 w-5"}`}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.84-.66 0-.359.24-.66.54-.78 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.242 1.021zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
          </div>
          <div className="transition-all duration-500">
            <p
              className={`uppercase tracking-[0.3em] text-spotify-text-subdued transition-all duration-500 ${
                isScrolled ? "text-[9px]" : "text-[10px]"
              }`}
            >
              Spotify
            </p>
            <p
              className={`font-semibold text-white transition-all duration-500 ${
                isScrolled ? "text-xs" : "text-sm"
              }`}
            >
              ArtistBlender
            </p>
          </div>
        </div>

        <div className="flex items-center gap-8 text-sm text-spotify-text-subdued">
          <a
            href="/how-it-works"
            className="hover:text-white transition-all duration-300 hover:scale-105 relative group"
          >
            How it works
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-spotify-green transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="/"
            className="hover:text-white transition-all duration-300 hover:scale-105 relative group"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-spotify-green transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="/about"
            className="hover:text-white transition-all duration-300 hover:scale-105 relative group"
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-spotify-green transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
      </div>
    </nav>
  );
};
