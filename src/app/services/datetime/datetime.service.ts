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
    const timeParts = this.DurationTimeParts(duration);

    let length: string = '';
    if (timeParts['days']) length += `${timeParts['days']} day${timeParts['days'] > 1 ? 's' : ''}`;
    if (timeParts['days'] && timeParts['hours']) length += ', ';
    if (timeParts['hours']) length += `${timeParts['hours']} hour${timeParts['hours'] > 1 ? 's' : ''}`;
    if (timeParts['days'] || timeParts['hours'] && timeParts['minutes']) length += ' and ';
    if (timeParts['minutes'] || !timeParts['days'] && !timeParts['hours']) length += `${timeParts['minutes']} minutes`;

    return length;
  }

  public BriefReadableDuration = (duration: moment.Duration): string => {
    const timeParts = this.DurationTimeParts(duration);

    let length: string = '';
    if (timeParts['days']) length += `${timeParts['days']} day${timeParts['days'] > 1 ? 's' : ''}`;
    else {
      if (timeParts['hours']) length+= `${timeParts['hours']} hour${timeParts['hours'] > 1 ? 's' : ''}`;
      if (timeParts['hours'] && timeParts['minutes']) length += ' and ';
      if (timeParts['minutes']) length += `${timeParts['minutes']} minutes`;  
    }

    return length;
  }

  private DurationTimeParts = (duration: moment.Duration): object => {
    const days: number = Math.floor(duration.asDays());
    const hours: number = Math.floor((duration.asMinutes() - (days * 24 * 60)) / 60);
    const minutes: number = Math.floor(duration.asMinutes()) - (days * 24 * 60) - (hours * 60);

    return { days, hours, minutes};
  }

}
