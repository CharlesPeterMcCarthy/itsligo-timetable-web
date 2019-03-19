import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Day from '../../../models/day.model';
import Class from '../../../models/class.model';
import Break from '../../../models/break.model';
import { DatetimeService } from '../../../services/datetime/datetime.service';
import { _ } from 'underscore';
import * as moment from 'moment';

@Component({
  selector: 'timetable-day',
  templateUrl: './timetable-day.component.html',
  styleUrls: ['./timetable-day.component.less']
})

export class TimetableDayComponent implements OnInit {

  @Input() day: Day;
  @Output() hideModule: EventEmitter<Object> = new EventEmitter();
  @Output() unhideModule: EventEmitter<Class> = new EventEmitter();
  public isCollapsed = false;

  constructor(private _datetimeService: DatetimeService) { }

  ngOnInit() {
    this.isCollapsed = this.IsToday();
  }

  public ModelName = (obj: Object): string => obj.constructor.name;

  public FindBreak = (endTime: moment.Moment): boolean => _.find(this.day.breaks, (b: Break) => b.times.start.isSame(endTime));

  public HideModule = (cl: Object): void => this.hideModule.emit(cl);

  public UnhideModule = (cl: Class): void => this.unhideModule.emit(cl);

  private IsToday = (): boolean => this._datetimeService.GetDayOfWeek() === this.day.day;

}
