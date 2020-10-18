import {Component} from '@angular/core';
import {MainService, Tasks} from '../main.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
})

export class OrderComponent {
  task: Tasks;
  id: number;
  constructor(private mainService: MainService, private route: ActivatedRoute) {
    route.params.subscribe(params => this.id = +params['id']);
    this.task = this.mainService.getOrderById(this.id);
  }
}
