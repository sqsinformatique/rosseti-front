import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BACKEND} from '../../globals/config';
import {LoginService} from '../login/login.service';

@Injectable({
  providedIn: 'root'
})

export class MainService {
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


  constructor(private http: HttpClient, private loginService: LoginService) {}

  getOrderById(id): Tasks {
    return this.tasks.filter(task => id === task.id)[0];
  }

  getOrder(): Observable<any> {
    return this.http.post(
      `${BACKEND}/orders`,
      {},
      {headers: this.loginService.getHeader()}
    );
  }
}

export interface Tasks {
  name: string;
  status: string;
  description: string;
  data: string;
  id: number;
}
