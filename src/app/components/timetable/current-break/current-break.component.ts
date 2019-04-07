import { Component, Input } from '@angular/core';
import Break from '../../../models/break.model';

@Component({
  selector: 'current-break',
  templateUrl: './current-break.component.html',
  styleUrls: ['./current-break.component.less']
})

export class CurrentBreakComponent {

  @Input() public break: Break;

  constructor() { }

}
