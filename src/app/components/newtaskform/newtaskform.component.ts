import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-newtaskform',
  templateUrl: './newtaskform.component.html',
  styleUrls: [],
})
export class NewtaskformComponent implements OnInit {
  @Output() newTaskFormSubmitEvent: EventEmitter<Object> = new EventEmitter();
  newTaskForm = new FormGroup({
    date: new FormControl(''),
    todo: new FormControl(''),
    reminder: new FormControl(false),
  });

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    this.newTaskFormSubmitEvent.emit(this.newTaskForm.value);
    this.newTaskForm.reset();
  }
}
