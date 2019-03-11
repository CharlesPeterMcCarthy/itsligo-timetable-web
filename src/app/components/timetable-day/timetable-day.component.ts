import { Component, OnInit, Input } from '@angular/core';
import { Day } from '../../models/day.model';
import { Class } from '../../models/class.model';
import { _ } from 'underscore';

@Component({
  selector: 'timetable-day',
  templateUrl: './timetable-day.component.html',
  styleUrls: ['./timetable-day.component.less']
})

export class TimetableDayComponent implements OnInit {

  @Input() day: Day;
  classes: Class[];
  public isCollapsed = false;

  constructor() { }

  ngOnInit() {
    this.classes = _.map(this.day.classes, (cl) => new Class(cl));
  }

}
