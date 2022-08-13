import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './users.reducer';

export const usersFeatureKey = 'users';

const selector = createFeatureSelector<UserState>(usersFeatureKey);

export const selectUserById = (userSpotifyId: string) =>
  createSelector(selector, (userState) => {
    return userState[userSpotifyId];
  });
