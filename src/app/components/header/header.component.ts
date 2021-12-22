import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title: string = 'Task Tracker';

  constructor() { }

  ngOnInit() {
  }

  toggleAddTask() {
    console.log("Task")
  }

}
