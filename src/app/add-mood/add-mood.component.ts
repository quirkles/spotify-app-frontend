import { Component, OnInit } from '@angular/core';
import {generateRandomName} from "./utils";
import {SpotifyApiService} from "../services/spotify/spotify-api.service";

@Component({
  selector: 'app-add-mood',
  templateUrl: './add-mood.component.html',
  styleUrls: ['./add-mood.component.scss']
})
export class AddMoodComponent {
  isCreating = true
  newMoodName: string
  idEditing = false
  constructor(private spotifyApiService: SpotifyApiService) {
    this.newMoodName = generateRandomName()
  }

  updateName(newName: string): void {
    console.log(newName) //eslint-disable-line
    this.newMoodName = newName
  }

  startEditing(): void {
    this.idEditing = true
  }

  stopEditing(): void {
    this.idEditing = false
  }

  async createMood(): Promise<void> {
    try {
      await this.spotifyApiService.createMood(this.newMoodName)
    } catch (e) {
      console.error('Failed to create mood', (e as Error).message)
    }
    this.newMoodName = generateRandomName()
  }
}
