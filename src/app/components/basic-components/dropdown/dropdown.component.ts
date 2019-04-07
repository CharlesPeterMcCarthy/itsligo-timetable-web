import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.less']
})

export class DropdownComponent {

  @Input() public items: string[];
  @Input() public key: string;
  @Input() public emptyOption: boolean;
  @Input() public emptyOptionText: string;
  @Input() public name: string;
  @Input() public disabled: boolean;
  @Output() public valueSelected: EventEmitter<any> = new EventEmitter();

  Change = (val): void => this.valueSelected.emit(val);

  ItemValue = (item): string => this.key ? item[this.key] : item;

}
