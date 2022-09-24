import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Address } from '../Model/Address';

@Injectable({
  providedIn: 'root',
})
export class AddressserviceService {
  baseUrl = 'http://localhost:8082/admin';

  constructor(private Http: HttpClient) {}

  getAddress() {
    return this.Http.get<Address[]>(`${this.baseUrl}/getAllAddresses`);
  }
}
