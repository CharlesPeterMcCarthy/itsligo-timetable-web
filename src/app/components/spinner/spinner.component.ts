import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.less']
})

export class SpinnerComponent {

  @Input() public text: string;
  @Input() public opacity: number;

  constructor() { }

}
