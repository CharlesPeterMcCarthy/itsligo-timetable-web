import { Component, OnInit, Input } from '@angular/core';
import Class from '../../../models/class.model';
import { DatetimeService } from '../../../services/datetime/datetime.service';
import * as moment from 'moment';

@Component({
  selector: 'timetable-class',
  templateUrl: './timetable-class.component.html',
  styleUrls: ['./timetable-class.component.less']
})

export class TimetableClassComponent implements OnInit {

  @Input() class: Class;
  @Input() day: string;
  @Input() conflicting: boolean;
  showMoreInfo: boolean = false;

  constructor(private _datetimeService: DatetimeService) { }

  ngOnInit() { }

  ShowMoreInfo = (): boolean => this.showMoreInfo = !this.showMoreInfo;

  GetLecturers = (): string => this.class.lecturers.join(' & ');

  GetClassDuration = (): string => this._datetimeService.ReadableDuration(this._datetimeService.TimeDuration(this.class.times.start, this.class.times.end));

  IsCurrentClass = (): boolean => this.day === this._datetimeService.GetDayOfWeek() && moment(new Date()).isBetween(this.class.times.start, this.class.times.end);
  
}
