import { Component, OnDestroy, OnInit } from '@angular/core';
import User from '../../../models/user.model';
import { AdminService } from '../../../services/admin/admin.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'admin-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.less']
})

export class UserListComponent implements OnInit, OnDestroy {

  public users: User[];
  private checker;

  constructor(
    private _adminService: AdminService,
    private _spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.ShowSpinner();
    this.GetUsers();
    this.checker = setInterval(this.GetUsers, 60000);
  }

  ngOnDestroy() { 
    clearInterval(this.checker);
  }

  public ShowSpinner = () => this._spinner.show();

  public HideSpinner = () => this._spinner.hide();

  private GetUsers = () => {
    this._adminService.GetUsers().subscribe(users => {
      this.users = users;
      this.HideSpinner();
    });
  }

}
