import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';

import { usersFeatureKey, UsersFeatureStore, UserState } from './users';
import { moodFeatureKey, MoodFeatureStore, MoodState } from "./moods";

export * from './users';
export * from './moods';

export interface AppStore {
  [usersFeatureKey]: UserState;
  [moodFeatureKey]: MoodState;
}

const prodStores = [
  StoreModule.forRoot({}),
  UsersFeatureStore,
  MoodFeatureStore
];

export const appStores = environment.production
  ? prodStores
  : [
      ...prodStores,
      StoreDevtoolsModule.instrument({
        maxAge: 25, // Retains last 25 states
        logOnly: false, // Restrict extension to log-only mode
        autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      }),
    ];
