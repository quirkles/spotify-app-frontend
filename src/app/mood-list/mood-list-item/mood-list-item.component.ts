import SwiperCore, {Autoplay, Pagination} from "swiper";
import {Component, Input, OnInit} from '@angular/core';
import {Mood} from "../../services/spotify";
import {Color, colorRandomizer, convertIdToNumber} from "../../util";
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
  @Input() slidesPerView = 2

  accentColor!: Color
  secondaryColor!: Color
  tertiaryColor!: Color
  initialSlide!: number
  speed!: number

  constructor(private store: Store<AppStore>) {
  }

  handleNameChange(newName: string): void {
    this.store.dispatch(updateMoodRequest({moodId: this.mood.id, updatePayload: {name: newName}}))
  }

  handleDescriptionChange(newDescription: string): void {
    this.store.dispatch(updateMoodRequest({moodId: this.mood.id, updatePayload: {description: newDescription}}))
  }

  ngOnInit() {
    const {primaryColor, secondaryColor, tertiaryColor} = colorRandomizer(convertIdToNumber(this.mood.id))
    this.accentColor = primaryColor
    this.secondaryColor = secondaryColor
    this.tertiaryColor = tertiaryColor
    this.initialSlide = getRandomInt(0, this.mood?.artists?.length || 1)
    this.speed = getRandomInt(1500, 2500)
  }
}
