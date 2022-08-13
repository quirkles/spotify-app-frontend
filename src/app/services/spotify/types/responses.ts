import {FetchMoodParams} from "./inputs";

export interface SpotifyUser {
  country: string;
  display_name: string;
  email: string;
  explicit_content: {
    filter_enabled: boolean;
    filter_locked: boolean;
  };
  external_urls: {
    spotify: string;
  };
  followers: {
    href: null;
    total: number;
  };
  href: string;
  id: string;
  images: [
    {
      height: null;
      url: string;
      width: null;
    }
  ];
  product: string;
  type: string;
  uri: string;
}

export interface Artist {
  id: string;
  name: string;
  externalSpotifyUrl: string;
  spotifyUri: string;
  spotifyId: string;
  imageUrl: string;
  moods?: Mood[];
}
export interface Mood {
  id: string;
  name: string;
  description?: string;
  playCount: number;
  artists?: Artist[];
  createdAt: Date;
  updatedAt: Date;
}

export interface FetchMoodsResponse {
  moods: Mood[];
  params: FetchMoodParams
}

export interface UpdateMoodResponse {
  mood: Mood;
}
