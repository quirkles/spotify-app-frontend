import { Component, OnInit } from '@angular/core';
import { SpotifyApiService } from '../spotify-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private spotifyApiService: SpotifyApiService) {}

  ngOnInit(): void | Promise<boolean> {
    this.spotifyApiService.getPersonalData().then((resp) => console.log(resp));
  }
}
