import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/interfaces/Task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: []
})
export class TaskComponent implements OnInit {
  @Input() task: Task = {
    date: "",
    todo: "",
    reminder: false,
    id: 0
  }
  @Output() toggleReminderClickEvent: EventEmitter<Event> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDoubleClick() {
    this.toggleReminderClickEvent.emit();
  }

}