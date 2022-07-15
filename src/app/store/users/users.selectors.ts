import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './users.reducer';
import { usersFeatureKey } from './index';

const selector = createFeatureSelector<UserState>(usersFeatureKey);

export const selectById = (userSpotifyId: string) =>
  createSelector(selector, (users) => {
    return users[userSpotifyId];
  });
