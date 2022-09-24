import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerserviceService } from 'src/app/customerservice.service';
import { Address } from 'src/app/Model/Address';
import { Book } from 'src/app/Model/Book';
import { Category } from 'src/app/Model/Category';
import { Customer } from 'src/app/Model/Customer';
import { OrderDetails } from 'src/app/Model/OrderDetails';
import { BookserviceService } from 'src/app/services/bookservice.service';
import { OrderserviceService } from 'src/app/services/orderservice.service';

@Component({
  selector: 'app-buybook',
  templateUrl: './buybook.component.html',
  styleUrls: ['./buybook.component.css'],
})
export class BuybookComponent implements OnInit {
  categories!: Category[];
  category: Category = new Category();
  books!: Book[];
  book: Book = new Book();
  id!: number;

  address: Address = new Address();

  order: OrderDetails = new OrderDetails();
  customer: Customer = new Customer();

  constructor(
    private bookService: BookserviceService,
    private customerService: CustomerserviceService,
    private orderService: OrderserviceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.order.customer = new Customer();
    this.order.book = new Book();
    this.order.shippingAddress = new Address();

    this.customer.address = new Address();
    this.order.shippingAddress.address = this.customer.address.address;
    this.order.shippingAddress.addressId = this.customer.address.addressId;
    this.order.shippingAddress.city = this.customer.address.city;
    this.order.shippingAddress.country = this.customer.address.country;
    this.order.shippingAddress.pincode = this.customer.address.pincode;
    this.book.category = new Category();
    this.id = this.route.snapshot.params['id'];
    this.order.book.bookId = this.id;
    this.order.customer.customerId = this.customer.customerId;

    //console.log(this.order.customer.customerId);
    console.log(this.order.shippingAddress.addressId);
    //const id = +this.route.paramMap.get('id');
    this.getBooksById(this.id);
    this.getCustomer();
    //console.log(this.id);
  }

  getCustomer() {
    console.log('Inside getCustomer');
    this.customerService.getCustomers().subscribe((customer) => {
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

  onUpdate() {
    this.order.customer.customerId = this.customer.customerId;
    this.order.shippingAddress.addressId = this.customer.address.addressId;
    this.order.status = 'Placed';
    console.log(this.order.book.bookId);
    console.log(this.order.customer.customerId);
    this.placeOrder(this.order);
  }

  getBooksById(bookId: number) {
    console.log('Inside getCategoryById');
    this.bookService.getBookByIdCustomer(bookId).subscribe((book) => {
      this.book = book;
      this.book.category.categoryId = book.category.categoryId;
      this.book.category.categoryName = book.category.categoryName;
      this.book.author = book.author;
      this.book.bookId = book.bookId;
      this.book.description = book.description;
      this.book.isbn = book.isbn;
      this.book.lastUpdatedOn = book.lastUpdatedOn;
      this.book.price = book.price;
      this.book.publishDate = book.publishDate;
    });
  }

  placeOrder(order: OrderDetails) {
    this.orderService.createOrder(order).subscribe();
    //window.location.href="/viewbcustomer";
  }

  getBooks() {
    console.log('Inside getCategory');
    this.bookService.getBooks().subscribe((data: Book[]) => {
      this.books = data;
      console.log(this.categories);
    });
  }
}
