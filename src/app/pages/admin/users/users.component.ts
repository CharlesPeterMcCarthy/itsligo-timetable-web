import { Component } from '@angular/core';

@Component({
  selector: 'admin-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less']
})

export class UsersComponent {

  public heading: string = "Users";

  constructor() { }

}
