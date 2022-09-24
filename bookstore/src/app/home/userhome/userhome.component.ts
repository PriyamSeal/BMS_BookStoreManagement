import { Component, OnInit } from '@angular/core';
import { RestapiService } from 'src/app/services/restapi.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css'],
})
export class UserhomeComponent implements OnInit {
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
    window.location.href = '/home';
  }
}
