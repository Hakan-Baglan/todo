import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { Task } from '../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  text: string = "";
  day: string = "";
  reminder: boolean = true;
  showAddTask!: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
    .onToggle()
    .subscribe((value)=>this.showAddTask=value)
  }

  ngOnInit(): void {
  }

  ngSubmit() {
    if (!this.text) {
      alert("Please add a task!")
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    } as Task;

    this.onAddTask.emit(newTask);

    // todo - emit event
    this.text = '';
    this.day = '';
    this.reminder = false;

  }

}
