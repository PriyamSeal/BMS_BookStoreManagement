import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Book } from '../Model/Book';
import { Review } from '../Model/Review';

@Injectable({
  providedIn: 'root',
})
export class ReviewserviceService {
  baseUrl = 'http://localhost:8082/admin';

  constructor(private Http: HttpClient) {}

  getAllReviews() {
    return this.Http.get<Review[]>(`${this.baseUrl}/listAllReviews`);
  }
}
