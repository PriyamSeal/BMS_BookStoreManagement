import { Address } from "./Address";

export class Customer
{
    customerId!:number;
    fullName!:string;
    email!:string;
    mobileNumber!:number;
    address!:Address;
    registerOn:Date = new Date();
   

}