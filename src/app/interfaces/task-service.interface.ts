import { Observable } from 'rxjs';
import { Task } from '../types/task.type';

export interface ITaskService {
  getTasks(): Observable<Task[]>;

  addTask(task: Omit<Task, 'id'>): void;

  editTask(task: Task): void;

  deleteTask(id: number): void;
}
