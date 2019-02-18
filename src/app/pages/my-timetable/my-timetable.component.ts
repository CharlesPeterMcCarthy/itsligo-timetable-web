import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-timetable',
  templateUrl: './my-timetable.component.html',
  styleUrls: ['./my-timetable.component.less']
})
export class MyTimetableComponent implements OnInit {
  heading: string = "My Timetable"
  timetableURL: string

  constructor() {
    
  }

  ngOnInit() {
  }

}
