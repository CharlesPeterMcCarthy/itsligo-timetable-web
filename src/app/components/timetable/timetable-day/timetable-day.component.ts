import { Component, OnInit, Input } from '@angular/core';
import Day from '../../../models/day.model';
import Class from '../../../models/class.model';
import Break from '../../../models/break.model';
import { DatetimeService } from '../../../services/datetime/datetime.service';
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

  constructor(private _datetimeService: DatetimeService) { }

  ngOnInit() {
    this.classes = _.map(this.day.classes, (cl) => new Class(cl));
    this.isCollapsed = this.IsToday();
  }

  public ModelName = (obj: Object): string => obj.constructor.name;

  public FindBreak = (endTime): boolean => _.find(this.day.breaks, (b: Break) => b.times.start === endTime);

  private IsToday = (): boolean => this._datetimeService.GetDayOfWeek() === this.day.day;

}
