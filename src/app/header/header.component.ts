import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  name: string;
  constructor(private titleService: Title, private authService: AuthService) { }

  ngOnInit(): void {
  }

  check()
  {
      const bool = this.authService.isLoggedIn();
      if ( bool )
      {
        this.name = localStorage.getItem('ACCESS_TOKEN');
      }
      return bool;
  }

  setPageTitle(title: string) {
    this.titleService.setTitle(title);
  }
}
