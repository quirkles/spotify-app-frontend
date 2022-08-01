import {Component, Input} from '@angular/core';
import {Mood} from "../services/spotify";
import {ResizedEvent} from "../resize.directive";

@Component({
  selector: 'app-mood-list',
  templateUrl: './mood-list.component.html',
  styleUrls: ['./mood-list.component.scss']
})
export class MoodListComponent {
  @Input() moods: Mood[] | null = []

  slidesPerGroupInItems = 2

  constructor() {
  }

  handleElResize(event: ResizedEvent) {
    const newWidth = event.newRect.width

    if (newWidth < 700) {
      this.slidesPerGroupInItems = 2
    } else if (newWidth < 820) {
      this.slidesPerGroupInItems = 3
    } else if (newWidth < 940) {
      this.slidesPerGroupInItems = 4
    } else if (newWidth < 1060) {
      this.slidesPerGroupInItems = 5
    } else if (newWidth < 1180) {
      this.slidesPerGroupInItems = 6
    } else if (newWidth < 1300) {
      this.slidesPerGroupInItems = 7
    } else if (newWidth < 1420) {
      this.slidesPerGroupInItems = 8
    } else {
      this.slidesPerGroupInItems = 9
    }
  }
}
