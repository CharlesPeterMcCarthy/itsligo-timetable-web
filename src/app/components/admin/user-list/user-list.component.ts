import { Component, OnInit } from '@angular/core';
import User from '../../../models/user.model';
import { AdminService } from '../../../services/admin/admin.service';

@Component({
  selector: 'admin-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.less']
})

export class UserListComponent implements OnInit {

  public users: User[];

  constructor(private _adminService: AdminService) {
    this.GetUsers();
    setInterval(this.GetUsers, 10000);
  }

  ngOnInit() { }

  private GetUsers = () => {console.log("get"); this._adminService.GetUsers().subscribe(users => this.users = users);}

}
