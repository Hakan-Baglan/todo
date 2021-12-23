import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  showAddTask: boolean = false;
  subject = new Subject<any>();

  constructor() { }

  toggleAddTask(): void {
    // console.log(123)
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  onToggle(): Observable<any>{
    return this.subject.asObservable();
  }

}
