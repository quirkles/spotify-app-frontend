import {createReducer, on} from '@ngrx/store';

import {
  createMoodFail,
  createMoodSuccess,
  fetchMoodsFail,
  fetchMoodsSuccess,
  updateMoodFail,
  updateMoodSuccess
} from './mood.actions';

import {Mood} from '../../services/spotify';
import {mergeDeepRight} from "ramda";

export interface MoodState {
  moods: Mood[];
}

const initialState: MoodState = {
  moods: []
};

export const moodsReducer = createReducer(
  initialState,
  on(
    createMoodSuccess,
    (state, payload) => {
      return {
        ...state,
        moods: [payload.mood, ...state.moods]
      }
    }
  ),
  on(
    createMoodFail,
    (state, payload) => {
      console.log("CREATE MOOD FAILED", payload.error) //eslint-disable-line
      return state
    }
  ),
  on(
    fetchMoodsSuccess,
    (state, payload) => {
      return {
        ...state,
        moods: [...state.moods, ...payload.moods]
      }
    }
  ),
  on(
    fetchMoodsFail,
    (state, payload) => {
      console.log("FETCH MOOD FAILED", payload.error) //eslint-disable-line
      return state
    }
  ),
  on(
    updateMoodSuccess,
    (state, payload) => {
      return {
        ...state,
        moods: state.moods.reduce((moods: Mood[], mood:Mood) => {
          if(mood.id === payload.mood.id) {
            return [...moods, mergeDeepRight(mood, payload.mood) as Mood]
          }
          return [...moods, mood]
        }, [])
      }
    }
  ),
  on(
    updateMoodFail,
    (state, payload) => {
      console.log("UPDATE MOOD FAILED", payload.error) //eslint-disable-line
      return state
    }
  ),
);
