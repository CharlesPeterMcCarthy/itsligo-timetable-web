import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Day from '../../../models/day.model';
import TimetableModule from '../../../models/timetable-module.model';
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
  @Output() unhideModule: EventEmitter<TimetableModule> = new EventEmitter();
  public isCollapsed = false;

  constructor(private _datetimeService: DatetimeService) { }

  ngOnInit() {
    this.isCollapsed = this.IsToday();
  }

  public ModelName = (obj: Object): string => obj.constructor.name;

  public FindBreak = (endTime: moment.Moment): boolean => _.find(this.day.breaks, (b: Break) => b.times.start.isSame(endTime));

  public HideModule = (mod: Object): void => this.hideModule.emit(mod);

  public UnhideModule = (mod: TimetableModule): void => this.unhideModule.emit(mod);

  private IsToday = (): boolean => this._datetimeService.GetDayOfWeek() === this.day.day;

}
