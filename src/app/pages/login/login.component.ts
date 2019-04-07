import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})

export class LoginComponent {
  
  public heading: string = "Login";

  constructor(private _title: Title) { 
    this._title.setTitle('Login | ITSligo Timetable');
  }

}
