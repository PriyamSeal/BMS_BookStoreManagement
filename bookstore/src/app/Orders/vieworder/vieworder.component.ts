import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderDetails } from 'src/app/Model/OrderDetails';
import { OrderserviceService } from 'src/app/services/orderservice.service';

@Component({
  selector: 'app-vieworder',
  templateUrl: './vieworder.component.html',
  styleUrls: ['./vieworder.component.css'],
})
export class VieworderComponent implements OnInit {
  orders!: OrderDetails[];

  constructor(
    private OrderService: OrderserviceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllOrders();
  }

  getAllOrders() {
    console.log('Inside GetCustomers');
    this.OrderService.getOrder().subscribe((data: any) => {
      this.orders = data;
      console.log(this.orders);
    });
  }

  deleteOrder(orderId: number) {
    if (confirm('Cancel Order?') == true) {
      console.log('Inside deleteCategory');
      this.OrderService.deleteOrder(orderId).subscribe();
      window.location.href = '/vieworder';
    }
  }
}
