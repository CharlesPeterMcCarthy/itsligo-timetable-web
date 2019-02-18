import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'timetable-day',
  templateUrl: './timetable-day.component.html',
  styleUrls: ['./timetable-day.component.less']
})

export class TimetableDayComponent implements OnInit {

  @Input() day: object

  constructor() { }

  ngOnInit() {
  }

}
