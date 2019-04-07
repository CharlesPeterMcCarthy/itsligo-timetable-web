import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})

export class HomeComponent {
  public heading: string = "IT Sligo Timetables"
  
  constructor(private _title: Title) { 
    this._title.setTitle('Choose Your Timetable | ITSligo Timetable');
  }

}
