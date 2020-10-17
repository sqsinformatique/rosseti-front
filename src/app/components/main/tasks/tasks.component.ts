import {Component} from '@angular/core';
import {MainService} from '../main.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
})

export class TasksComponent {
  tasks: Tasks[] = [
    {
      id: 0,
      name:  'РАСПОРЯЖЕНИЕ № 2060304-197 для работы в электроустановках',
      status: 'warning',
      description: 'ВЛ 10 кВ ТП №265- ТП № 240',
      data: '10.02.2020'
    },
    {
      id: 1,
      name:  'РАСПОРЯЖЕНИЕ № 2060304-197 для работы в электроустановках',
      status: 'success',
      description: 'ВЛ 10 кВ ТП №265- ТП № 240',
      data: '10.02.2020'
    },
    {
      id: 2,
      name:  'РАСПОРЯЖЕНИЕ № 2060304-197 для работы в электроустановках',
      status: 'warning',
      description: 'ВЛ 10 кВ ТП №265- ТП № 240',
      data: '10.02.2020'
    },
    {
      id: 3,
      name:  'РАСПОРЯЖЕНИЕ № 2060304-197 для работы в электроустановках',
      status: 'error',
      description: 'ВЛ 10 кВ ТП №265- ТП № 240',
      data: '10.02.2020'
    }
  ];

  constructor(private mainService: MainService) {
    console.log(this.tasks);
    mainService.getOrder().subscribe(
      res => console.log(res),
      err => console.log(err),
      () => console.log('finish')
    );
  }
}

interface Tasks {
  name: string;
  status: string;
  description: string;
  data: string;
  id: number;
}
