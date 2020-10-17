import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BACKEND} from '../../globals/config';
import {LoginService} from '../login/login.service';

@Injectable({
  providedIn: 'root'
})

export class MainService {
  constructor(private http: HttpClient, private loginService: LoginService) {}

  getOrder(): Observable<any> {
    return this.http.post(
      `${BACKEND}/orders`,
      {},
      {headers: this.loginService.getHeader()}
    );
  }
}

