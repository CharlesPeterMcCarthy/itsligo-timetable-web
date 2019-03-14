import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})

export class RegisterComponent implements OnInit {

  public isRegistered: boolean = false;
  //public heading: string = "Register";

  constructor() { }

  ngOnInit() { }

  PageHeading = (): string => this.isRegistered ? "Registered" : "Register";

  Registered = (evt: boolean): void => {
    this.isRegistered = evt;
  }

}
