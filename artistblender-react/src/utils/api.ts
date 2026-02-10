import axios from "axios";
import type {
  Artist,
  Track,
  UserProfile,
  SearchArtistsResponse,
  ShuffleResponse,
} from "../types";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "/api"; // Proxy to Flask backend

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // Important for session cookies
});

export const spotifyApi = {
  // Search for artists
  searchArtists: async (query: string): Promise<SearchArtistsResponse> => {
    const response = await api.get(
      `/search_artists?query=${encodeURIComponent(query)}`,
    );
    return response.data;
  },

  // Shuffle selected artists
  shuffle: async (artistIds: string[]): Promise<ShuffleResponse> => {
    const formData = new FormData();
    artistIds.forEach((id) => formData.append("artists", id));

    const response = await api.post("/shuffle", formData);
    return response.data;
  },

  // Get current track info
  getCurrentTrack: async (): Promise<Track | { show_controls: false }> => {
    const response = await api.get("/current_track");
    return response.data;
  },

  // Playback controls
  previousTrack: async (): Promise<void> => {
    await api.get("/previous");
  },

  nextTrack: async (): Promise<void> => {
    await api.get("/next");
  },

  pauseTrack: async (): Promise<void> => {
    await api.get("/pause");
  },

  playTrack: async (): Promise<void> => {
    await api.get("/play");
  },

  // Get top artists
  getTopArtists: async (): Promise<Artist[]> => {
    const response = await api.get("/top_artists");
    return response.data;
  },

  // Get user profile
  getUserProfile: async (): Promise<UserProfile> => {
    const response = await api.get("/profile");
    return response.data;
  },

  // Logout
  logout: async (): Promise<void> => {
    await api.post("/logout");
    // Clear all client-side storage
    localStorage.clear();
    sessionStorage.clear();
    // Clear all cookies
    document.cookie.split(";").forEach((c) => {
      document.cookie = c
        .replace(/^ +/, "")
        .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });
  },

  // Login (redirect to Spotify OAuth)
  login: (): void => {
    window.location.href = `${API_BASE_URL}/`;
  },
};
