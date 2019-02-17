import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'page-heading',
  templateUrl: './page-heading.component.html',
  styleUrls: ['./page-heading.component.less']
})

export class PageHeadingComponent implements OnInit {
  @Input() heading: string

  constructor() { }

  ngOnInit() { }
}
