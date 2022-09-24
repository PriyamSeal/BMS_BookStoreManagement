import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RestapiService {
  url = 'http://localhost:8082';

  constructor(private http: HttpClient) {}

  generateToken(credential: any) {
    return this.http.post(`${this.url}/token`, credential);
  }

  loginUser(token: string) {
    localStorage.setItem('token', token);
    return true;
  }
  isLoggedIn() {
    let token = localStorage.getItem('token');
    if (token == undefined || token == '' || token == null) {
      return false;
    } else {
      return true;
    }
  }

  logOut() {
    localStorage.removeItem('token');
    return true;
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
