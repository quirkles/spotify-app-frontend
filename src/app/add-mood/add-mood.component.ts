import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-add-mood',
  templateUrl: './add-mood.component.html',
  styleUrls: ['./add-mood.component.scss']
})
export class AddMoodComponent implements OnInit {
  isCreating = true
  newMoodName = new FormControl<string>('')
  constructor() { }

  ngOnInit(): void {}

  toggleIsCreating(): void {
    this.isCreating = !this.isCreating
  }

}
