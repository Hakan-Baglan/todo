import { Injectable } from '@angular/core';
import { Task } from '../components/Task';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

const httpOptions = {
  headers: new HttpHeaders({
    'content-Type': 'aplication/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  apiUrl: string = environment.api;
  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl + "/tasks")
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl + "/tasks"}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl + "/tasks"}/${task.id}`;
    return this.http.put<Task>(url,task,httpOptions);
  }

}
