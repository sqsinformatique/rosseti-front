import {NgModule} from '@angular/core';
import {LoginComponent} from './login.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {LoginService} from './login.service';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
  ],
  providers: [LoginService],
})

export class LoginModule {}
