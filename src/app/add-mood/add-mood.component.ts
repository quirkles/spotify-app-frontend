import {Component, OnDestroy, OnInit} from '@angular/core';
import {generateRandomName} from "./utils";
import {MoodService} from "../services/spotify";
import {AppStore, createMoodRequest, MoodActionType} from "../store";
import {Store} from "@ngrx/store";
import {Actions, ofType} from "@ngrx/effects";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-add-mood',
  templateUrl: './add-mood.component.html',
  styleUrls: ['./add-mood.component.scss']
})
export class AddMoodComponent implements OnDestroy{
  destroyed$ = new Subject<boolean>();

  newMoodName: string
  isEditing = false
  constructor(
    private moodService: MoodService,
    private store: Store<AppStore>,
    private actions$: Actions
  ) {
    this.newMoodName = generateRandomName()
    actions$.pipe(
      ofType(MoodActionType.CREATE_MOOD_SUCCESS),
      takeUntil(this.destroyed$)
    )
      .subscribe(() => {
        this.newMoodName = generateRandomName()
      });
  }

  updateName(newName: string): void {
    this.newMoodName = newName
  }

  startEditing(): void {
    this.isEditing = true
  }

  stopEditing(): void {
    this.isEditing = false
  }

  async createMood(): Promise<void> {
    this.store.dispatch(createMoodRequest({ moodName: this.newMoodName }));
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
