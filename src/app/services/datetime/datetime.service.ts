import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})

export class DatetimeService {

  private weekDays: string[] = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

  constructor() { }

  public Now = (): moment.Moment => moment(new Date());

  public GetDayOfWeek = (): string => this.weekDays[new Date().getDay()];

  public GetDayNumber = (day: string): number => this.weekDays.indexOf(day);

  public TimeDifference = (start: moment.Moment, end: moment.Moment): number => end.diff(start);

  public TimeDuration = (start: moment.Moment, end: moment.Moment): moment.Duration => moment.duration(this.TimeDifference(start, end));

  public IsNow = (start: moment.Moment, end: moment.Moment): boolean => this.Now().isBetween(start, end);
  
  public ReadableDuration = (duration: moment.Duration): string => {
    const days: number = Math.floor(duration.asDays());
    const hours: number = Math.floor((duration.asMinutes() - (days * 24 * 60)) / 60);
    const minutes: number = Math.floor(duration.asMinutes()) - (days * 24 * 60) - (hours * 60);

    let length: string = '';
    if (days) length += `${days} day${days > 1 ? 's' : ''}`;
    if (days && hours) length += ', ';
    if (hours) length += `${hours} hour${hours > 1 ? 's' : ''}`;
    if (hours && minutes) length += ' and ';
    if (minutes) length += `${minutes} minutes`;

    return length;
  }

}
