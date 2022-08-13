import { Component, OnInit } from '@angular/core';
import {
  fetchMoodByIdRequest,
  listMoods,
  removeArtistFromMoodRequest,
  selectMoodById,
  updateMoodRequest
} from "../store";
import {Observable, of} from "rxjs";
import {Mood} from "../services/spotify";
import {ActivatedRoute} from "@angular/router";
import {Store} from "@ngrx/store";
import {Color, colorRandomizer, convertIdToNumber} from "../util";

@Component({
  selector: 'app-mood-details',
  templateUrl: './mood-details.component.html',
  styleUrls: ['./mood-details.component.scss']
})
export class MoodDetailsComponent implements OnInit {
  mood$: Observable<Partial<Mood>> = of({})
  moodId: string | null = null

  accentColor!: Color
  secondaryColor!: Color
  tertiaryColor!: Color
  constructor(private store: Store, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.moodId = this.route.snapshot.paramMap.get('moodId');


    if(this.moodId) {
      const {primaryColor, secondaryColor, tertiaryColor} = colorRandomizer(convertIdToNumber(this.moodId))
      this.accentColor = primaryColor
      this.secondaryColor = secondaryColor
      this.tertiaryColor = tertiaryColor
      this.mood$ = this.store.select(selectMoodById(this.moodId))
      this.store.dispatch(fetchMoodByIdRequest({moodId: this.moodId}))
    }
    this.mood$.subscribe(mood => this.moodId = mood.id || null)
  }

  handleNameChange(newName: string): void {
    if(this.moodId) {
      this.store.dispatch(updateMoodRequest({moodId: this.moodId, updatePayload: {name: newName}}))
    }
  }

  handleDescriptionChange(newDescription: string): void {
    if(this.moodId) {
      this.store.dispatch(updateMoodRequest({moodId: this.moodId, updatePayload: {description: newDescription}}))
    }
  }
  handleDeleteArtist(artistId: string): void {
    if(this.moodId) {
      this.store.dispatch(removeArtistFromMoodRequest({moodId: this.moodId, artistId}))
    }
  }
}
