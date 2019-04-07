import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'module-info',
  templateUrl: './module-info.component.html',
  styleUrls: ['./module-info.component.less']
})
export class ModuleInfoComponent implements OnInit {

  @Input() public colWidth: string;
  @Input() public infoClass: string;
  @Input() public title: string;
  @Input() public info: string;
  @Input() public isInnerHTML: boolean = false;
  @Input() public isTime: boolean = false;
  @HostBinding('class') get hostClass() { return `col-${this.colWidth}` };

  constructor() { }

  ngOnInit() { }

}
