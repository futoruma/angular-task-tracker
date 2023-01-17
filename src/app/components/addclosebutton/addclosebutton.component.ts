import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-addclosebutton',
  templateUrl: './addclosebutton.component.html',
  styleUrls: []
})
export class AddclosebuttonComponent implements OnInit {
  @Output() addCloseClickEvent: EventEmitter<Event> = new EventEmitter();
  toCreate: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.addCloseClickEvent.emit();
    this.toCreate = !this.toCreate;
  }

}
