import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BACKEND} from '../../globals/config';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  constructor(private http: HttpClient){}

  private token = null;

  getHeader(): HttpHeaders {
    return new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Cookie', `rosseti-session=${this.token}`);
  }

  auth({login, password}): Observable<any> {
    return this.http.post<any>(`${BACKEND}/auth`, {
      user_phone: login,
      user_password: password
    });
  }

  saveUserToken(token) {
    localStorage.setItem('auth', token);
    this.token = token;
  }

  logout() {
    this.token = null;
    localStorage.removeItem('auth');
  }

  getUserByID(token): Observable<any> {
    return this.http.post<any>(`${BACKEND}/users`, {

    });
  }
}

