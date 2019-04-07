import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { NavLink } from '../../interfaces/nav-link';
import { AdminService } from '../../services/admin/admin.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less']
})

export class NavComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private _authService: AuthService,
    private _router: Router,
    private _adminService: AdminService,
    private _toastr: ToastrService
  ) {}

  private isBelowNav: boolean = false;
  public expandNav: boolean = false;

  public navLinksLeft = Array<NavLink>(
    {
      text: 'Home',
      url: '/'
    },
    {
      text: 'My Timetable',
      url: '/timetable'
    }
  );

  public navLinksRight = Array<NavLink>(
    {
      text: 'Login',
      url: '/login'
    },
    {
      text: 'Register',
      url: '/register'
    }
  );

  public adminLinksRight = Array<NavLink>(
    {
      text: 'Users',
      url: '/admin/users'
    }
  );

  logoutLink: NavLink = ({ text: 'Logout' });

  ngOnInit() { }

  @HostListener("window:scroll", [])
  public OnScroll = (): void => {
    const offset = this.document.documentElement.scrollTop || this.document.body.scrollTop;
    this.isBelowNav = offset >= 20;
  }

  public BackgroundColor = (): string => this.isBelowNav || this.expandNav ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.8)';
  
  public ToggleNavbar = (): boolean => this.expandNav = !this.expandNav;

  public CloseNavBar = (): void => {
    this.expandNav = false;
  }

  public Logout = (): void => {
    this._authService.Logout();
    this._toastr.success("You've been successfully logged out.");
    this._router.navigate(['/']);
  }

  public IsLoggedIn = (): boolean => this._authService.IsLoggedIn();

  public IsAdmin = (): boolean => this._adminService.IsAdmin();

}