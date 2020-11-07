import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from 'src/app/model/task.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  public tasks: Array<Task> = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.searchTasks();
  }

  searchTasks() {
    this.taskService.getTasks().subscribe(
      (data) => {
        this.tasks = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteTask(id) {
    this.taskService.deleteTask(id).subscribe(
      (data) => {
        this.searchTasks();
        alert("Tarefa excluida");
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
