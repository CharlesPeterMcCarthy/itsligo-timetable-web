import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less']
})

export class NavComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) {}

  isBelowNav: boolean = false;
  expandNav: boolean = false;

  ngOnInit() {}

  @HostListener("window:scroll", [])
  OnScroll = (): void => {
    const offset = this.document.documentElement.scrollTop || this.document.body.scrollTop;
    this.isBelowNav = offset >= 20;
  }

  BackgroundColor = (): string => this.isBelowNav || this.expandNav ? 'rgba(0, 0, 0, 0.95)' : 'rgba(0, 0, 0, 0.1)';
  
  ToggleNavbar = () => this.expandNav = !this.expandNav;

}