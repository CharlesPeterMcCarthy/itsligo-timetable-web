import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nav-link',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.less']
})
export class NavLinkComponent implements OnInit {

  @Input() public url: string;
  @Input() public text: string;

  constructor() { }

  ngOnInit() { console.log(this.text); console.log(this.url) }

}
