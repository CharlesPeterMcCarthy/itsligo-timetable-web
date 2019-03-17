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

  public HaveClassesLeft = (timetable: Timetable): boolean => {
    const classes = this.Today(timetable).classes;
    const now: moment.Moment = moment(new Date());

    return !!_.find(classes, (cl: Class) => moment(cl.times.end, 'HH:mm') > now);
  }

  public HaveClassToday = (timetable: Timetable): boolean => !_.isEmpty(this.Today(timetable).classes);

  public IsNow = (obj: Class | Break): boolean => {
    const start: moment.Moment =  moment(obj.times.start, "HH:mm");
    const end: moment.Moment = moment(obj.times.end, "HH:mm");
    const now: moment.Moment = moment(new Date());

    return now.isBetween(start, end);
  }

  public BlockLengthReadable = (obj: Class | Break): string => {
    const blockLength = this.BlockLength(obj);
    const hours: number = Math.floor(blockLength.asMinutes() / 60);
    const minutes: number = blockLength.asMinutes() - (hours * 60);

    let length: string = '';
    if (hours) length += `${hours} hour${hours > 1 ? 's' : ''}`;
    if (hours && minutes) length += ' and ';
    if (minutes) length += `${minutes} minutes`;

    return length;
  }

  private BlockLength = (obj: Class | Break): moment.Duration => {
    const start: moment.Moment =  moment(obj.times.start, "HH:mm");
    const end: moment.Moment = moment(obj.times.end, "HH:mm");
    return moment.duration(end.diff(start));
  }
  
}
