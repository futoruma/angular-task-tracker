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
  tasks!: Array<Task>;
  toOpenNewTaskForm: boolean = false;

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.crudService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  toggleReminder(task: Task) {
    this.crudService.updateTask(task).subscribe();
  }

  deleteTask(task: Task) {
    this.crudService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((_task) => _task.id != task.id))
      );
  }

  addTask(newTaskFormValue: any) {
    this.crudService
      .addTask(newTaskFormValue)
      .subscribe((task) => this.tasks.push(task));
  }

  openHideNewTaskForm() {
    this.toOpenNewTaskForm = !this.toOpenNewTaskForm;
  }
}
