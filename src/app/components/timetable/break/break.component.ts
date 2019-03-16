import { Component, OnInit, Input } from '@angular/core';
import Break from '../../../models/break.model';
import * as moment from 'moment';

@Component({
  selector: 'timetable-break',
  templateUrl: './break.component.html',
  styleUrls: ['./break.component.less']
})

export class BreakComponent implements OnInit {

  @Input() break: Break;

  constructor() { }

  ngOnInit() { }

  public BreakLength = (): string => {
    const start: moment.Moment =  moment(this.break.times.start, "HH:mm");
    const end: moment.Moment = moment(this.break.times.end, "HH:mm");
    const diff: moment.Duration = moment.duration(end.diff(start));
    const hours: number = diff.asHours();
    const minutes: number = diff.asMinutes() - (diff.asHours() * 60);

    let length: string = '';
    if (hours) length += `${hours} hour${hours > 1 ? 's' : ''}`;
    if (hours && minutes) length += ' and ';
    if (minutes) length += `${minutes} minutes`;

    return length;
  }

}
