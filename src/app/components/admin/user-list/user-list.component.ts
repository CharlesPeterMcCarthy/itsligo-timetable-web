import { Component, OnDestroy } from '@angular/core';
import User from '../../../models/user.model';
import { AdminService } from '../../../services/admin/admin.service';

@Component({
  selector: 'admin-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.less']
})

export class UserListComponent implements OnDestroy {

  public users: User[];
  private checker;

  constructor(private _adminService: AdminService) {
    this.GetUsers();
    this.checker = setInterval(this.GetUsers, 10000);
  }

  ngOnDestroy() { 
    clearInterval(this.checker);
  }

  private GetUsers = () => this._adminService.GetUsers().subscribe(users => this.users = users);

}
