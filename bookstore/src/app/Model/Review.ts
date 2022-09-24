import { Category } from './Category';
import { Book } from './Book';
import { Customer } from './Customer';

export class Review {
  reviewId!: number;
  book!: Book;
  customer!: Customer;
  headLine!: string;
  comment!: string;
  rating!: string;
  reviewOn: Date = new Date();
}
