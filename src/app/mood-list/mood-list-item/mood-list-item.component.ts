import SwiperCore, {Autoplay, Pagination} from "swiper";
import {Component, Input, OnInit} from '@angular/core';
import {Mood} from "../../services/spotify";
import {Color} from "../../util";
import {AppStore, updateMoodRequest} from "../../store";
import {Store} from "@ngrx/store";


SwiperCore.use([Autoplay, Pagination]);

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

@Component({
  selector: 'app-mood-list-item',
  templateUrl: './mood-list-item.component.html',
  styleUrls: ['./mood-list-item.component.scss']
})
export class MoodListItemComponent implements OnInit {
  @Input() mood!: Mood

  accentColor!: Color
  initialSlide!: number
  speed!: number

  constructor(private store: Store<AppStore>) {
  }

  handleNameChange(newName: string): void {
    this.store.dispatch(updateMoodRequest({moodId: this.mood.id, updatePayload: {name: newName}}))
  }

  ngOnInit() {
    const n = parseInt(this.mood.id.replace(/\D/g, "").substring(3, 6), 10)
    const colors = Object.values(Color);
    this.accentColor = colors[n % colors.length]
    this.initialSlide = getRandomInt(0, this.mood.artists.length)
    this.speed = getRandomInt(1500, 2500)
  }


}
