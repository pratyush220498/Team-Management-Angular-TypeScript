import { User } from './../user';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { NgForm} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isError = false;
  isSubmitted  =  false;
  public user = new User();
  loginError: string;
  error: string;
  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(){
    this.authService.logout();
    this.isError = true;
    localStorage.clear();
  }

  login(){
    console.log(JSON.parse(JSON.stringify(this.user)));
    this.isSubmitted = true;
    const str = this.authService.login(this.user);
    if ( str === 'admin')
     { this.router.navigateByUrl('/admin'); }
     else if (str === 'guest')
      {this.router.navigateByUrl('/guest'); }
      else
      {
        this.loginError = 'Username or password is incorrect.';
        this.error = this.loginError;
        this.isError = true;
      }
  }
}
