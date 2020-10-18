import {NgModule} from '@angular/core';
import {MainComponent} from './main.component';
import {CommonModule} from '@angular/common';
import {MainService} from './main.service';
import {OrderComponent} from './order/order.component';
import {RouterModule} from '@angular/router';
import {TasksComponent} from './tasks/tasks.component';
import {AppModule} from '../../app.module';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    MainComponent,
    TasksComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule
  ],
  providers: [MainService],
})

export class MainModule {}
