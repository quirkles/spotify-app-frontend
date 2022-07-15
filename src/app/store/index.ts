import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { usersFeatureKey, UsersFeatureStore, UserState } from './users';
import { environment } from '../../environments/environment';

export * from './users';

export interface AppStore {
  [usersFeatureKey]: UserState;
}

const prodStores = [StoreModule.forRoot({}), UsersFeatureStore];

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
