import { Component, Input } from '@angular/core';

@Component({
  selector: 'input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.less']
})

export class InputFieldComponent {

  @Input() type: string;
  @Input() placeholder: string;
  public value: string;

  constructor() { }

}
