import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})

export class HomeComponent implements OnInit {
  heading: string = "Choose Your Timetable"
  
  constructor(private _title: Title) { 
    this._title.setTitle('Choose Your Timetable | ITSligo Timetable');
  }

  ngOnInit() {}
}
