import { Component, Input } from '@angular/core';
import User from '../../../models/user.model';
import { faCheckCircle, faCircle, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'admin-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.less'],
  host: { 'class': 'list-group-item' }
})

export class UserInfoComponent {

  @Input() user: User;
  
  public icons = {
    checkIcon: faCheckCircle,
    uncheckIcon: faCircle, 
    linkIcon: faExternalLinkAlt
  }

  constructor() { }

}
