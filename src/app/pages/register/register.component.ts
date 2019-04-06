import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})

export class RegisterComponent implements OnInit {

  public isRegistered: boolean = false;

  constructor(private _title: Title) { 
    this._title.setTitle('Register | ITSligo Timetable');
  }

  ngOnInit() { }

  PageHeading = (): string => this.isRegistered ? "Registered" : "Register";

  Registered = (evt: boolean): void => {
    this.isRegistered = evt;
  }

}
