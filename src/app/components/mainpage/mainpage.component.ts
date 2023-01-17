import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Task } from 'src/app/interfaces/Task';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: [],
})
export class MainpageComponent implements OnInit {
  title: string = 'Task Tracker';
  tasks: Array<Task> = [
    {
      date: '',
      todo: '',
      reminder: false,
      id: 0,
    },
  ];

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.crudService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }
}
