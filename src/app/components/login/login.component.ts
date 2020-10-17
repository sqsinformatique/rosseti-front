import {Component} from '@angular/core';
import {LoginService} from './login.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})

export class LoginComponent {
  loginForm = {
    login: '',
    password: '',
  };

  ready = true;

  constructor(
    private loginService: LoginService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  openSnackBar(message: string, action: string, duration = 2000) {
    this.snackBar.open(message, action, {
      duration,
    });
  }

  auth() {
    this.ready = false;
    this.loginService.auth(this.loginForm).subscribe(
      res => {
        this.loginService.saveUserToken(res.result.id);
        this.router.navigate(['main'] );
      },
      () => {
        this.openSnackBar('Что то пошло не так', 'X');
        this.ready = true;
      },
      () => {
        this.ready = true;
      }
    );
  }

}
