import { Component, OnInit } from '@angular/core';
import { RestapiService } from 'src/app/services/restapi.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css'],
})
export class UserloginComponent implements OnInit {
  credential = {
    email: '',
    password: '',
  };

  constructor(private service: RestapiService) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log('Form Submitted');
    this.service.generateToken(this.credential).subscribe(
      (response: any) => {
        console.log(response.token);
        this.service.loginUser(response.token);
        window.location.href = '/userhome';
      },
      (error) => {
        alert('Bad Credential');
      }
    );
  }
  onClick() {
    myTest();
  }
}
function myTest() {
  throw new Error('Function not implemented.');
}
