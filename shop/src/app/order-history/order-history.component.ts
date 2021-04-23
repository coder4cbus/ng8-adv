import { Component, OnInit } from '@angular/core';
import { AccountService, Order } from '../account.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  orderHistory: Order[]

  constructor(private accountSvc:AccountService) { }

  ngOnInit() {
    this.accountSvc.getOrderHistory().subscribe(
      history => this.orderHistory = history
    )
  }

}
