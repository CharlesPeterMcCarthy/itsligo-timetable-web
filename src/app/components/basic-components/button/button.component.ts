import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})

export class ButtonComponent implements OnChanges {

  private readonly btnSizes = {
    'small': 'btn-sm',
    'medium': 'btn-md',
    'large': 'btn-lg'
  }

  private readonly btnStyles = {
    'primary': 'btn-primary',
    'secondary': 'btn-secondary',
    'success': 'btn-success',
    'danger': 'btn-danger',
    'warning': 'btn-warning',
    'info': 'btn-info',
    'light': 'btn-light',
    'dark': 'btn-dark',
    'link': 'btn-link'
  }

  @Input() public text: string;
  @Input() public size: string;
  @Input() public style: string;
  @Input() public disabled: boolean;
  public btnSize: string;
  public btnStyle: string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.btnSize = this.btnSizes[this.size] || 'btn-md';
    this.btnStyle = this.btnStyles[this.style] || 'btn-primary';
  }

}
