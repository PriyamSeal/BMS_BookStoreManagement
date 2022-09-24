import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from 'src/app/Model/Address';
import { AddressserviceService } from 'src/app/services/addressservice.service';

@Component({
  selector: 'app-viewaddress',
  templateUrl: './viewaddress.component.html',
  styleUrls: ['./viewaddress.component.css']
})
export class ViewaddressComponent implements OnInit {

  address!:Address[]

  constructor(private AddressService:AddressserviceService,private router:Router) { }

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks()
  {
    console.log("Inside GetBooks");
    this.AddressService.getAddress().subscribe(data=>{
      this.address=data;
      console.log(this.address);
    })
  }

}
