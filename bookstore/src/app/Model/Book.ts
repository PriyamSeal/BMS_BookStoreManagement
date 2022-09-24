import { Category } from "./Category";


export class Book
{
    bookId!:number;
    title!:string;
    category!:Category;
    author!:string;
    description!:string;
    isbn!:string;
    price!:string;
    publishDate:Date = new Date();
    lastUpdatedOn:Date = new Date();

}