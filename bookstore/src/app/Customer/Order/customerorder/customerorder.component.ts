import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderDetails } from 'src/app/Model/OrderDetails';
import { OrderserviceService } from 'src/app/services/orderservice.service';

@Component({
  selector: 'app-customerorder',
  templateUrl: './customerorder.component.html',
  styleUrls: ['./customerorder.component.css'],
})
export class CustomerorderComponent implements OnInit {
  orders: OrderDetails = new OrderDetails();

  constructor(
    private OrderService: OrderserviceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getOrder();
  }

  getOrder() {
    console.log('Inside getCustomer');
    this.OrderService.getOrders().subscribe((Order) => {
      this.orders = Order;
      this.orders.book.title = Order.book.title;
      this.orders.book.author = Order.book.author;
      this.orders.orderDate = Order.orderDate;
      this.orders.orderId = Order.orderId;
      this.orders.orderTotal = Order.orderTotal;
      this.orders.quantity = Order.quantity;
      this.orders.paymentMethod = Order.paymentMethod;
      this.orders.status = Order.status;
    });
  }

  deleteOrder(orderId: number) {
    if (confirm('Cancel Order?') == true) {
      console.log('Inside deleteCategory');
      this.OrderService.deleteOrderUser(orderId).subscribe();
      window.location.href = '/customerorder';
    }
  }
}
