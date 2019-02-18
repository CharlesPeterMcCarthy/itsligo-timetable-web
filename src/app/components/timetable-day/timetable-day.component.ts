import { Component, OnInit, Input } from '@angular/core';
import { Day } from '../../models/day.model';
import { Class } from '../../models/class.model';

@Component({
  selector: 'timetable-day',
  templateUrl: './timetable-day.component.html',
  styleUrls: ['./timetable-day.component.less']
})

export class TimetableDayComponent implements OnInit {

  @Input() day: Day
  classes: Class[]

  constructor() { }

  ngOnInit() {
    this.classes = this.day.classes;
  }

}
