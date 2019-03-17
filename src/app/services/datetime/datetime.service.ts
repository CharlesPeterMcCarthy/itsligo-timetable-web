import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})

export class DatetimeService {

  constructor() { }

  public Now = (): moment.Moment => moment(new Date());

  public GetDayOfWeek = (): string => ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][new Date().getDay()];

  public TimeDifference = (start: moment.Moment, end: moment.Moment): number => end.diff(start);

  public TimeDuration = (start: moment.Moment, end: moment.Moment): moment.Duration => moment.duration(this.TimeDifference(start, end));

  public IsNow = (start: moment.Moment, end: moment.Moment): boolean => this.Now().isBetween(start, end);
  
  public ReadableDuration = (duration: moment.Duration): string => {
    const hours: number = Math.floor(duration.asMinutes() / 60);
    const minutes: number = duration.asMinutes() - (hours * 60);

    let length: string = '';
    if (hours) length += `${hours} hour${hours > 1 ? 's' : ''}`;
    if (hours && minutes) length += ' and ';
    if (minutes) length += `${minutes} minutes`;

    return length;
  }

}
