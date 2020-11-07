import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Task } from '../model/task.model';
import { Observable } from 'rxjs';

const BASE_URI = environment.apiBaseUri;
const BASE_PATH = '/tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Array<Task>> {
    return this.http.get<Array<Task>>(`${BASE_URI}${BASE_PATH}`)
  }

  deleteTask(taskId) {
    return this.http.delete<Array<Task>>(`${BASE_URI}${BASE_PATH}/${taskId}`)
  }
}
