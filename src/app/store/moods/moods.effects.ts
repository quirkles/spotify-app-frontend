import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, EMPTY, map, mergeMap, of} from "rxjs";
import {MoodService} from "../../services/spotify";
import {
  createMoodFail,
  createMoodRequest,
  createMoodSuccess, fetchMoodsFail,
  fetchMoodsRequest,
  fetchMoodsSuccess,
  MoodActionType, updateMoodFail, updateMoodRequest, updateMoodSuccess
} from "./mood.actions";

@Injectable()
export class MoodEffects {

  createMood$ = createEffect(() => this.actions$.pipe(
      ofType<ReturnType<typeof createMoodRequest>>(MoodActionType.CREATE_MOOD_REQUEST),
      mergeMap((payload) => {
        return this.moodService.createMood(payload.moodName)
        .pipe(
          map((response) => createMoodSuccess({ mood: response })),
          catchError((props) => of(createMoodFail({ error: props.error })))
        )
      })
    )
  );

  fetchMoods$ = createEffect(() => this.actions$.pipe(
      ofType<ReturnType<typeof fetchMoodsRequest>>(MoodActionType.FETCH_MOODS_REQUEST),
      mergeMap((payload) => {
        return this.moodService.fetchMoods(payload.params)
          .pipe(
            map((response) => fetchMoodsSuccess({ moods: response.moods })),
            catchError((error) => of(fetchMoodsFail({ error})))
          )
      })
    )
  );

  updateMood$ = createEffect(() => this.actions$.pipe(
      ofType<ReturnType<typeof updateMoodRequest>>(MoodActionType.UPDATE_MOOD_REQUEST),
      mergeMap((payload) => {
        return this.moodService.updateMood(payload.moodId, payload.updatePayload)
          .pipe(
            map((response) => updateMoodSuccess({ mood: response.mood })),
            catchError((error) => of(updateMoodFail({ error})))
          )
      })
    )
  );

  constructor(
    private actions$: Actions,
    private moodService: MoodService
  ) {}
}
