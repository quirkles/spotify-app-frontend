import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Artist, Mood} from "../../services/spotify";

@Component({
  selector: 'app-playlist-artist',
  templateUrl: './playlist-artist.component.html',
  styleUrls: ['./playlist-artist.component.scss']
})
export class PlaylistArtistComponent {
  @Input() artist!: Partial<Artist>

  @Output() deleteArtist = new EventEmitter<string>()

  constructor() { }

  handleDeleteClick() {
    this.deleteArtist.emit(this.artist.id)
  }

}
