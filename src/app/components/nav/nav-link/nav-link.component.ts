import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NavLink } from '../../../interfaces/nav-link';

@Component({
  selector: 'nav-link',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.less']
})

export class NavLinkComponent implements OnInit {

  @Input() public navLink: NavLink;

  constructor() { }

  ngOnInit() { }

}
