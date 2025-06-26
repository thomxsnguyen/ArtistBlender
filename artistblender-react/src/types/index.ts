export interface Artist {
  id: string;
  name: string;
  image?: string;
}

export interface Track {
  track_name: string;
  artist_name: string;
  track_url: string;
  album_image_url: string;
  track_id: string;
  is_playing: boolean;
  show_controls: boolean;
}

export interface UserProfile {
  display_name: string;
  profile_image?: string;
}

export interface SpotifyApiResponse<T> {
  data?: T;
  error?: string;
}

export interface SearchArtistsResponse {
  artists: Artist[];
}

export interface ShuffleResponse {
  success: boolean;
  is_playing: boolean;
  reset_search: boolean;
  error?: string;
}
