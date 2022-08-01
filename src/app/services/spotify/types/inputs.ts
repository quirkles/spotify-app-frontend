export interface FetchMoodParams extends Record<string, unknown> {
  limit?: number;
  includeArtists?: boolean;
  sortBy?: "createdAt" | "play_count";
  sortDirection?: "asc" | "desc";
}

export interface UpdateMoodPayload {
  name?: string
  playCount?: number
}
