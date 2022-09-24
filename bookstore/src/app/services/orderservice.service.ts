import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { OrderDetails } from '../Model/OrderDetails';

@Injectable({
  providedIn: 'root',
})
export class OrderserviceService {
  baseUrl = 'http://localhost:8082/admin';
  base = 'http://localhost:8082/user';

  constructor(private Http: HttpClient) {}

  getOrder() {
    return this.Http.get<OrderDetails[]>(`${this.baseUrl}/getAllOrders`);
  }

  deleteOrder(orderId: number): Observable<Object> {
    //console.log(`${this.baseUrl}/deleteCategory/2`);
    return this.Http.delete(`${this.baseUrl}/deleteOrder/${orderId}`);
  }
  deleteOrderUser(orderId: number): Observable<Object> {
    //console.log(`${this.baseUrl}/deleteCategory/2`);
    return this.Http.delete(`${this.base}/deleteOrder/${orderId}`);
  }

  createOrder(order: OrderDetails): Observable<Object> {
    return this.Http.post(`${this.base}/saveOrder`, order);
  }

  getOrders(): Observable<OrderDetails> {
    //console.log(`${this.baseUrl}/deleteCategory/2`);
    return this.Http.get<OrderDetails>(`${this.base}/getOrder/4`);
  }
}
