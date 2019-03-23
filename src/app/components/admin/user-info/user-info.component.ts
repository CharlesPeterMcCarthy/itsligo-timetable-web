import { Component, Input } from '@angular/core';
import User from '../../../models/user.model';
import { faCheckCircle, faCircle, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'admin-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.less']
})

export class UserInfoComponent {

  @Input() user: User;
  public checkIcon: IconDefinition = faCheckCircle;
  public uncheckIcon: IconDefinition = faCircle;

  constructor() { }

}
