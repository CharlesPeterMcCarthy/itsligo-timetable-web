import { Component, OnInit, Input } from '@angular/core';
import { Class } from '../../models/class.model';
import { DatetimeService } from '../../services/datetime/datetime.service';
import * as moment from 'moment';

@Component({
  selector: 'timetable-class',
  templateUrl: './timetable-class.component.html',
  styleUrls: ['./timetable-class.component.less']
})

export class TimetableClassComponent implements OnInit {

  @Input() class: Class;
  @Input() day: string;
  showMoreInfo: boolean = false;

  constructor(private _datetimeService: DatetimeService) { }

  ngOnInit() { }

  ShowMoreInfo = (): void => {
    this.showMoreInfo = !this.showMoreInfo;
  }

  GetLecturers = (): string => this.class.lecturers.join(' & ');

  GetClassDuration = (): string => {
    const classDuration = parseInt(this.class.duration);
    return `${classDuration} hour` + (classDuration > 1 ? 's' : '');
  }

  IsCurrentClass = (): boolean => {
    const start = moment(this.class.times.start, "HH:mm");
    const end = moment(this.class.times.end, "HH:mm");
    return this.day === this._datetimeService.GetDayOfWeek() && moment(new Date()).isBetween(start, end);
  }  

}
