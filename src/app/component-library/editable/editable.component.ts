import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {FormControl} from "@angular/forms";

enum Color {
  'primary' = 'primary',
  'info' = 'info',
  'success' = 'primary',
  'warning' = 'primary',
  'blue' = 'blue',
  'pink' = 'pink',
}

@Component({
  selector: 'app-editable',
  templateUrl: './editable.component.html',
  styleUrls: ['./editable.component.scss']
})
export class EditableComponent implements OnInit, OnChanges {
  @Input() value: string | null = null
  @Input() color: Color = Color.primary
  @Output() newValue = new EventEmitter<string>()
  @Output() editStart = new EventEmitter<void>()
  @Output() editStop = new EventEmitter<void>()
  @ViewChild('inputField') inputField!: ElementRef<HTMLInputElement>
  localValue: string = ''
  isEditing = false
  valueFormControl = new FormControl<string>('')

  constructor() { }

  ngOnInit() {
    this.localValue = this.value || ''
    this.valueFormControl.setValue(this.localValue)
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['value']?.currentValue) {
     this.valueFormControl.setValue(changes['value'].currentValue)
    }
  }

  startEditing() {
    this.isEditing = true
    setTimeout(() => this.inputField.nativeElement.focus(), 1)
    this.editStart.emit()
  }

  clearValue() {
    this.valueFormControl.setValue('')
    setTimeout(() => this.inputField.nativeElement.focus(), 1)
  }

  saveEdit(event: Event) {
    console.log('save') //eslint-disable-line
    this.localValue = this.valueFormControl.value || ''
    this.newValue.emit(this.localValue)
    this.isEditing = false
    if(event.type === 'submit') {
      event.stopPropagation()
      event.preventDefault()
    }
    this.editStop.emit()
  }

  quitEditing() {
    console.log('quit') //eslint-disable-line
    this.valueFormControl.setValue(this.localValue)
    this.isEditing = false
    this.editStop.emit()
  }
}
