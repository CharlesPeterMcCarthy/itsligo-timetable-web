import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'admin-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less']
})

export class UsersComponent {

  public heading: string = "Users";

  constructor(private _title: Title) { 
    this._title.setTitle('Admin - Users | ITSligo Timetable');
  }

}
