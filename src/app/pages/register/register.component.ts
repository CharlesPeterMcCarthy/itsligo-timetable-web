import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})

export class RegisterComponent {

  public isRegistered: boolean = false;
  public openRegistration: boolean = environment.openRegistration;

  constructor(private _title: Title) { 
    this._title.setTitle('Register | ITSligo Timetable');
  }

  public PageHeading = (): string => this.isRegistered ? "Registered" : "Register";

  public Registered = (evt: boolean): void => {
    this.isRegistered = evt;
  }

}
