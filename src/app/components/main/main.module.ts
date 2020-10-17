import {NgModule} from '@angular/core';
import {MainComponent} from './main.component';
import {CommonModule} from '@angular/common';
import {MainService} from './main.service';
import {OrderComponent} from './order/order.component';
import {RouterModule} from '@angular/router';
import {TasksComponent} from './tasks/tasks.component';
import {AppModule} from '../../app.module';


@NgModule({
  declarations: [
    MainComponent,
    TasksComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [MainService],
})

export class MainModule {}
