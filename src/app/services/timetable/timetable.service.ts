import { Injectable } from '@angular/core';
import { DatetimeService } from '../datetime/datetime.service';
import { _ } from 'underscore';
import * as moment from 'moment';
import Timetable from '../../models/timetable';
import Day from '../../models/day.model';
import Class from '../../models/class.model';
import Break from '../../models/break.model';

@Injectable({
  providedIn: 'root'
})

export class TimetableService {

  constructor(private _datetimeService: DatetimeService) { }

  public Today = (timetable: Timetable): Day => _.findWhere(timetable.Days, { day: this._datetimeService.GetDayOfWeek() });

  public HaveClassesLeft = (timetable: Timetable): boolean => !!this.ClassesLeft(timetable);

  public ClassesLeft = (timetable: Timetable): boolean => _.find(this.Today(timetable).classes, (cl: Class) => moment(cl.times.end, 'HH:mm') > this._datetimeService.Now());

  public HaveClassToday = (timetable: Timetable): boolean => !_.isEmpty(this.Today(timetable).classes);

  public CurrentClass = (timetable: Timetable): Class[] => _.filter(this.Today(timetable).classes, (cl: Class) => this.IsNow(cl));

  public CurrentBreak = (timetable: Timetable): Break => _.find(this.Today(timetable).breaks, (br: Break) => this.IsNow(br));
  
  public BlockLengthReadable = (obj: Class | Break): string => this._datetimeService.ReadableDuration(this._datetimeService.TimeDuration(obj.times.start, obj.times.end));

  private IsNow = (obj: Class | Break): boolean => this._datetimeService.IsNow(obj.times.start, obj.times.end);

}
