import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MoodState} from './index';
import {Mood} from "../../services/spotify";

export const moodFeatureKey = 'mood';

const selector = createFeatureSelector<MoodState>(moodFeatureKey);

export const listMoods = () =>
  createSelector(selector, (moodState): Mood[] => {
    return moodState['moods'];
  });

export const selectMoodById = (moodId: string) =>
  createSelector(selector, (moodState) => {
    return (moodState.moods || []).find(mood => mood.id === moodId) || {};
  });
