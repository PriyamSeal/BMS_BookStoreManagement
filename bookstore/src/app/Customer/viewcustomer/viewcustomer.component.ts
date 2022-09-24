import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerserviceService } from 'src/app/customerservice.service';
import { Customer } from 'src/app/Model/Customer';

@Component({
  selector: 'app-viewcustomer',
  templateUrl: './viewcustomer.component.html',
  styleUrls: ['./viewcustomer.component.css'],
})
export class ViewcustomerComponent implements OnInit {
  customers!: Customer[];

  constructor(
    private CustomerService: CustomerserviceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllCustomers();
  }

  getAllCustomers() {
    console.log('Inside GetCustomers');
    this.CustomerService.getCustomer().subscribe((data: any) => {
      this.customers = data;
      console.log(this.customers);
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
