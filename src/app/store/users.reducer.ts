import { createReducer, on } from '@ngrx/store';
import { assoc, mergeDeepRight, propOr } from 'ramda';

import { setUserData } from './user.actions';
import { SpotifyUser } from '../services/spotify/types';

export interface UserState {
  [userSpotifyId: string]: Partial<SpotifyUser>;
}

export const initialState: UserState = {};

export const usersReducer = createReducer(
  initialState,
  on(
    setUserData,
    (state, { userSpotifyId, userData }) =>
      assoc(
        userSpotifyId,
        mergeDeepRight(
          propOr({}, userSpotifyId, state) as SpotifyUser,
          userData
        ),
        state
      ) as UserState
  )
);
