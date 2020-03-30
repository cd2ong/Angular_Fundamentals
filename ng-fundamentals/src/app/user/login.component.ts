import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;
  mouseoverLogin: boolean;

  constructor(
    private authService: AuthService,
    private router: Router) { }

  login(formValues){
    this.authService.loginUser(formValues.userName,
       formValues.password);
    if (this.authService.isAuthenticated()){
      this.router.navigate(['events']);
    }
  }

  cancel(){
    this.router.navigate(['events']);
  }

  ngOnInit(): void {
  }

}
