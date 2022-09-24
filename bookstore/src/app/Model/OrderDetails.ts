import { Address } from "./Address";
import { Book } from "./Book";
import { Customer } from "./Customer";

export class OrderDetails
{
    orderId!:number;
    customer!:Customer;
    book!:Book;
    orderTotal!:number;
    status!:string;
    quantity!:string;
    shippingAddress!:Address;
    paymentMethod!:string;
    orderDate:Date = new Date();
}