import { Component, OnInit } from '@angular/core';
import { RestapiService } from './services/restapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public loggedIn = false;
  title = 'bookstore';

  constructor(private loginService: RestapiService) {}

  ngOnInit(): void {
    this.loggedIn = this.loginService.isLoggedIn();
  }

  logOut() {
    localStorage.removeItem('token');
    console.log('Token Removed');
    this.loggedIn = false;
    window.location.href = '/login';
  }
}
