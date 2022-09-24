import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Category } from '../Model/Category';

@Injectable({
  providedIn: 'root',
})
export class CategoryserviceService {
  baseUrl = 'http://localhost:8082/admin';

  constructor(private Http: HttpClient) {}

  getCategory() {
    return this.Http.get<Category[]>(`${this.baseUrl}/getAllCategories`);
  }
  getCategoryById(categoryId: number): Observable<Category> {
    return this.Http.get<Category>(`${this.baseUrl}/getCategory/${categoryId}`);
  }

  updateCategory(category: Category): Observable<Object> {
    return this.Http.put(`${this.baseUrl}/editCategory`, category);
  }

  createCategory(category: Category): Observable<Object> {
    return this.Http.post(`${this.baseUrl}/saveCategory`, category);
  }

  deleteCategory(categoryId: number): Observable<Object> {
    //console.log(${this.baseUrl}/deleteCategory/2);
    return this.Http.delete(`${this.baseUrl}/deleteCategory/${categoryId}`);
  }
}
