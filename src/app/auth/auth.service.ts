import { User } from './user';
import { NgForm } from '@angular/forms';
import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: any;
  constructor() {}

  public login(userInfo: User){
    if ( userInfo.id === 'admin' && userInfo.password === 'admin')
    {
      localStorage.setItem('ACCESS_TOKEN', 'Admin');
      return 'admin';
    }
    if ( userInfo.id === 'guest' && userInfo.password === 'guest' )
    {
      localStorage.setItem('ACCESS_TOKEN', 'Guest');
      return 'guest';
    }
  }

  public isLoggedIn(){
    return (localStorage.getItem('ACCESS_TOKEN') !== null);
  }

  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }
}
