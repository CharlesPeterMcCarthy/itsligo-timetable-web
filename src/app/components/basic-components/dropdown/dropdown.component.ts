import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.less']
})

export class DropdownComponent {

  @Input() items: string[];
  @Input() key: string;
  @Input() emptyOption: boolean;
  @Input() emptyOptionText: string;
  @Input() name: string;
  @Input() disabled: boolean;
  @Output() valueSelected: EventEmitter<any> = new EventEmitter();

  Change = (val): void => this.valueSelected.emit(val);

  ItemValue = (item): string => this.key ? item[this.key] : item;

}
