import { Component, Input } from '@angular/core';

@Component({
  selector: 'page-heading',
  templateUrl: './page-heading.component.html',
  styleUrls: ['./page-heading.component.less']
})

export class PageHeadingComponent {
  @Input() public heading: string

  constructor() { }

}
