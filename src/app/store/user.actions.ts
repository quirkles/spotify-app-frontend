import { createAction, props } from '@ngrx/store';
import { SpotifyUser } from '../services/spotify/types';

export const setUserData = createAction(
  '[User] SetUserData',
  props<{ userSpotifyId: string; userData: Partial<SpotifyUser> }>()
);
