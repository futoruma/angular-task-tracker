import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../interfaces/Task';

const httpHeaders: HttpHeaders = new HttpHeaders().set(
  'content-type',
  'application/json'
);

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  url = 'http://localhost:3000/tasks/';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Array<Task>> {
    return this.http.get<Array<Task>>(this.url, { headers: httpHeaders });
  }

  updateTask(task: Task): Observable<Task> {
    const newUrl = `${this.url}${task.id}`;
    task.reminder = !task.reminder;
    return this.http.put<Task>(newUrl, task, { headers: httpHeaders });
  }
}
