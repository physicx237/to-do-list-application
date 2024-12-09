import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Task } from '../types/task.type';
import { TaskService } from '../task.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-task-item',
  imports: [RouterModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskItemComponent {
  @Input() public task!: Task;

  constructor(private readonly taskService: TaskService) {}

  public changeTaskCompleteStatus(task: Task, isCompleted: boolean) {
    this.taskService.editTask({ ...task, isCompleted });
  }

  public editTask(task: Task) {
    this.taskService.editTask(task);
  }

  public deleteTask(id: number) {
    this.taskService.deleteTask(id);
  }
}
