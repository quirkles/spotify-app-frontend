import { createAction, props } from '@ngrx/store';
import {FetchMoodParams, Mood, UpdateMoodPayload} from '../../services/spotify/types';

export enum MoodActionType {
  // Create
  CREATE_MOOD_REQUEST = '[mood.api] CREATE_MOOD_REQUEST',
  CREATE_MOOD_SUCCESS = '[mood.api] CREATE_MOOD_SUCCESS',
  CREATE_MOOD_FAIL = '[mood.api] CREATE_MOOD_FAIL',

  // Create
  UPDATE_MOOD_REQUEST = '[mood.api] UPDATE_MOOD_REQUEST',
  UPDATE_MOOD_SUCCESS = '[mood.api] UPDATE_MOOD_SUCCESS',
  UPDATE_MOOD_FAIL = '[mood.api] UPDATE_MOOD_FAIL',

  // Fetch
  FETCH_MOODS_REQUEST = '[mood.api] FETCH_MOODS_REQUEST',
  FETCH_MOODS_SUCCESS = '[mood.api] FETCH_MOODS_SUCCESS',
  FETCH_MOODS_FAIL = '[mood.api] FETCH_MOODS_FAIL',
}

export const createMoodRequest = createAction(
  MoodActionType.CREATE_MOOD_REQUEST,
  props<{ moodName: string; }>()
);

export const createMoodSuccess = createAction(
  MoodActionType.CREATE_MOOD_SUCCESS,
  props<{ mood: Mood }>()
);

export const createMoodFail = createAction(
  MoodActionType.CREATE_MOOD_FAIL,
  props<{ error: Error }>()
);

export const fetchMoodsRequest = createAction(
  MoodActionType.FETCH_MOODS_REQUEST,
  props<{ params: FetchMoodParams }>()
);

export const fetchMoodsSuccess = createAction(
  MoodActionType.FETCH_MOODS_SUCCESS,
  props<{ moods: Mood[] }>()
);

export const fetchMoodsFail = createAction(
  MoodActionType.FETCH_MOODS_FAIL,
  props<{ error: Error }>()
);

export const updateMoodRequest = createAction(
  MoodActionType.UPDATE_MOOD_REQUEST,
  props<{ moodId: string, updatePayload: UpdateMoodPayload }>()
);

export const updateMoodSuccess = createAction(
  MoodActionType.UPDATE_MOOD_SUCCESS,
  props<{ mood: Mood }>()
);

export const updateMoodFail = createAction(
  MoodActionType.UPDATE_MOOD_FAIL,
  props<{ error: Error }>()
);
