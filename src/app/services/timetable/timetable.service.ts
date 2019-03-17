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

  public HaveClassToday = (timetable: Timetable): boolean => !!this.Today(timetable).classes;

  public IsNow = (obj: Class | Break): boolean => {
    const start: moment.Moment =  moment(obj.times.start, "HH:mm");
    const end: moment.Moment = moment(obj.times.end, "HH:mm");
    const now: moment.Moment = moment("15:05", "HH:mm");

    return now.isBetween(start, end);
  }
  
}
