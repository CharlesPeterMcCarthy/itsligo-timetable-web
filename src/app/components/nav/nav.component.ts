import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { NavLink } from '../../interfaces/nav-link';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less']
})

export class NavComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private _authService: AuthService,
    private _router: Router
  ) {}

  isBelowNav: boolean = false;
  expandNav: boolean = false;

  navLinksLeft = Array<NavLink>(
    {
      text: 'Home',
      url: '/'
    },
    {
      text: 'My Timetable',
      url: '/timetable'
    }
  );

  navLinksRight = Array<NavLink>(
    {
      text: 'Login',
      url: '/login'
    },
    {
      text: 'Register',
      url: '/register'
    }
  );

  logoutLink: NavLink = ({ text: 'Logout' });

  ngOnInit() { }

  @HostListener("window:scroll", [])
  OnScroll = (): void => {
    const offset = this.document.documentElement.scrollTop || this.document.body.scrollTop;
    this.isBelowNav = offset >= 20;
  }

  BackgroundColor = (): string => this.isBelowNav || this.expandNav ? 'rgba(0, 0, 0, 0.95)' : 'rgba(0, 0, 0, 0.4)';
  
  ToggleNavbar = (): boolean => this.expandNav = !this.expandNav;

  CloseNavBar = (): void => {
    this.expandNav = false;
  }

  Logout = (): void => {
    this._authService.Logout();
    this._router.navigate(['/']);
  }

  IsLoggedIn = (): boolean => this._authService.IsLoggedIn();

}