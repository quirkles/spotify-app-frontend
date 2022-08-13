import { StoreModule } from '@ngrx/store';
import { usersReducer } from './users.reducer';
import { NgModule } from '@angular/core';

import {usersFeatureKey} from "./users.selectors";

export * from "./users.reducer"
export * from "./users.actions"
export * from "./users.selectors"

@NgModule({
  imports: [StoreModule.forFeature(usersFeatureKey, usersReducer)],
})
export class UsersFeatureStore {}
