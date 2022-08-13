import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditableComponent } from './editable/editable.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    EditableComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    EditableComponent
  ]
})
export class ComponentLibraryModule { }
