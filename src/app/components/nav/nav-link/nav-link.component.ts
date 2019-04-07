import { Component, Input } from '@angular/core';
import { NavLink } from '../../../interfaces/nav-link';
import { Router } from '@angular/router';

@Component({
  selector: 'nav-link',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.less']
})

export class NavLinkComponent {

  @Input() public navLink: NavLink;

  constructor(private _router: Router) { }

  public IsActive = (): boolean => this._router.url === this.navLink.url;

}
