import { StoreModule } from '@ngrx/store';
import { usersReducer } from './users.reducer';
import { NgModule } from '@angular/core';

export { usersReducer, UserState } from './users.reducer';

export const usersFeatureKey = 'users';

@NgModule({
  imports: [StoreModule.forFeature(usersFeatureKey, usersReducer)],
})
export class UsersFeatureStore {}
