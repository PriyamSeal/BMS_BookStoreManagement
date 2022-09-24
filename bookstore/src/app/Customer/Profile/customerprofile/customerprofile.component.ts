import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerserviceService } from 'src/app/customerservice.service';
import { Customer } from 'src/app/Model/Customer';

@Component({
  selector: 'app-customerprofile',
  templateUrl: './customerprofile.component.html',
  styleUrls: ['./customerprofile.component.css'],
})
export class CustomerprofileComponent implements OnInit {
  // customers!:Customer[]
  customer: Customer = new Customer();

  constructor(
    private CustomerService: CustomerserviceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCustomer();
  }

  getCustomer() {
    console.log('Inside getCustomer');
    this.CustomerService.getCustomers().subscribe((customer) => {
      this.customer = customer;
      this.customer.address.addressId = customer.address.addressId;
      this.customer.address.address = customer.address.address;
      this.customer.address.city = customer.address.city;
      this.customer.address.country = customer.address.country;
      this.customer.address.pincode = customer.address.pincode;
      this.customer.customerId = customer.customerId;
      this.customer.email = customer.email;
      this.customer.fullName = customer.fullName;
      this.customer.mobileNumber = customer.mobileNumber;
    });
  }

  deleteCustomer(customerId: number) {
    if (confirm('Confirm Terminate The User') == true) {
      console.log('Inside deleteCategory');
      this.CustomerService.deleteCustomer(customerId).subscribe();
      window.location.href = '/viewcustomer';
    }
  }
}
