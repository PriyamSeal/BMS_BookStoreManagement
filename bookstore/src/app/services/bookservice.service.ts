import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Book } from '../Model/Book';

@Injectable({
  providedIn: 'root',
})
export class BookserviceService {
  baseUrl = 'http://localhost:8082/admin';
  base = 'http://localhost:8082/user';

  constructor(private Http: HttpClient) {}

  getBooks() {
    return this.Http.get<Book[]>(`${this.baseUrl}/getAllBooks`);
  }
  getBooksForCustomer() {
    return this.Http.get<Book[]>(`${this.base}/getAllBooks`);
  }

  createBook(book: Book): Observable<Object> {
    return this.Http.post(`${this.baseUrl}/saveBook`, book);
  }

  deleteBook(bookId: number): Observable<Object> {
    //console.log(`${this.baseUrl}/deleteCategory/2`);
    return this.Http.delete(`${this.baseUrl}/deleteBook/${bookId}`);
  }
  getBookById(bookId: number): Observable<Book> {
    return this.Http.get<Book>(`${this.baseUrl}/getBook/${bookId}`);
  }
  getBookByIdCustomer(bookId: number): Observable<Book> {
    return this.Http.get<Book>(`${this.base}/getBook/${bookId}`);
  }

  updateBook(book: Book): Observable<Object> {
    return this.Http.put(`${this.baseUrl}/editBook`, book);
  }
}
