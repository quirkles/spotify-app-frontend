import {Component, Input} from '@angular/core';
import {Mood} from "../services/spotify";

@Component({
  selector: 'app-mood-list',
  templateUrl: './mood-list.component.html',
  styleUrls: ['./mood-list.component.scss']
})
export class MoodListComponent {
  @Input() moods: Mood[] | null = []

  constructor(){ }
}
