import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task} from '../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleTaskReminder: EventEmitter<Task> = new EventEmitter();
  fatimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task:any){
    this.onDeleteTask.emit(task);
  }

  onToggle(task:any){
    this.onToggleTaskReminder.emit(task);
  }


}
