import { Injectable } from '@angular/core';
import { ITaskService } from './interfaces/task-service.interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from './types/task.type';

@Injectable({
  providedIn: 'root',
})
export class TaskService implements ITaskService {
  private tasks: Task[] = [
    {
      id: 0,
      description: 'First',
      isCompleted: false,
    },
    {
      id: 1,
      description: 'Second',
      isCompleted: false,
    },
    {
      id: 2,
      description: 'Third',
      isCompleted: false,
    },
  ];

  private tasks$ = new BehaviorSubject<Task[]>(
    // []
    this.tasks
  );

  public getTasks(): Observable<Task[]> {
    return this.tasks$.asObservable();
  }

  public addTask(task: Omit<Task, 'id'>): void {
    const tasks = this.tasks$.value;
    const lastTaskId = tasks[tasks.length - 1].id;

    const newTask = {
      id: lastTaskId + 1,
      ...task,
    };

    tasks.push(newTask);

    this.tasks$.next(tasks);
  }

  public editTask(task: Task): void {
    const tasks = this.tasks$.value;

    const editedTasks = tasks.map((item) => {
      if (item.id === task.id) {
        return task;
      }

      return item;
    });

    this.tasks$.next(editedTasks);
  }

  public deleteTask(id: number): void {
    const tasks = this.tasks$.value;

    const taskIndex = tasks.findIndex((item) => item.id === id);

    tasks.splice(taskIndex, 1);

    this.tasks$.next(tasks);
  }
}
