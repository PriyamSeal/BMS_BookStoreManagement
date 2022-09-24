import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Book } from './Model/Book';
import { Customer } from './Model/Customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerserviceService {
  baseUrl = 'http://localhost:8082/admin';
  base = 'http://localhost:8082/user';

  constructor(private Http: HttpClient) {}

  getCustomer() {
    return this.Http.get<Customer[]>(`${this.baseUrl}/getAllCustomers`);
  }

  deleteCustomer(customerId: number): Observable<Object> {
    //console.log(`${this.baseUrl}/deleteCategory/2`);
    return this.Http.delete(`${this.baseUrl}/deleteCustomer/${customerId}`);
  }

  getCustomers(): Observable<Customer> {
    //console.log(`${this.baseUrl}/deleteCategory/2`);
    return this.Http.get<Customer>(`${this.base}/getCustomer/1`);
  }
}
