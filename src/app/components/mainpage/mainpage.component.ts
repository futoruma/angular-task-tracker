import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: []
})
export class MainpageComponent implements OnInit {
  title: string = "Task Tracker";

  constructor() { }

  ngOnInit(): void {
  }

}
