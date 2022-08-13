import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { moodsReducer } from './moods.reducer';
import {moodFeatureKey} from "./mood.selectors";

export * from "./moods.effects"
export * from "./moods.reducer"
export * from "./mood.actions"
export * from "./mood.selectors"


@NgModule({
  imports: [StoreModule.forFeature(moodFeatureKey, moodsReducer)],
})
export class MoodFeatureStore {}
