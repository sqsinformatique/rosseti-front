import {Component} from '@angular/core';
import {MainService, Tasks} from '../main.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
})

export class TasksComponent {
  tasks: Tasks[] = [];

  constructor(private mainService: MainService) {
    this.tasks = mainService.tasks;
    mainService.getOrder().subscribe(
      res => console.log(res),
      err => console.log(err),
      () => console.log('finish')
    );
  }
}


