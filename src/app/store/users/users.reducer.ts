import { createReducer, on } from '@ngrx/store';
import { assoc, mergeDeepRight, propOr } from 'ramda';

import { setUserData } from './users.actions';
import { SpotifyUser } from '../../services/spotify';

export interface UserState {
  [userSpotifyId: string]: Partial<SpotifyUser>;
}

const initialState: UserState = {};

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
