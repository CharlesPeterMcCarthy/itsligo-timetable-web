import { Component, Input, OnInit } from '@angular/core';
import User from '../../../models/user.model';
import { faCheckCircle, faCircle, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { DatetimeService } from '../../../services/datetime/datetime.service';

@Component({
  selector: 'admin-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.less'],
  host: { 'class': 'list-group-item' }
})

export class UserInfoComponent implements OnInit {

  @Input() public user: User;
  public registeredReadable: string;
  public lastActionReadable: string;
  
  public icons = {
    checkIcon: faCheckCircle,
    uncheckIcon: faCircle, 
    linkIcon: faExternalLinkAlt
  }

  constructor(private _datetimeService: DatetimeService) { }

  ngOnInit() {
    this.SetRegisterAtReadable();
    this.SetLastActionReadable();
  }

  private SetRegisterAtReadable = () => this.registeredReadable = this._datetimeService.ReadableDuration(this._datetimeService.TimeDuration(this.user.times.registerAt, this._datetimeService.Now()));

  private SetLastActionReadable = () => this.lastActionReadable = this._datetimeService.ReadableDuration(this._datetimeService.TimeDuration(this.user.times.lastAction, this._datetimeService.Now()));

}
