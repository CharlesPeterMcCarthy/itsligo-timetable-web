import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Class from '../../../models/class.model';
import { DatetimeService } from '../../../services/datetime/datetime.service';
import * as moment from 'moment';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'timetable-class',
  templateUrl: './timetable-class.component.html',
  styleUrls: ['./timetable-class.component.less']
})

export class TimetableClassComponent implements OnInit {

  @Input() class: Class;
  @Input() day: string;
  @Input() conflicting: boolean;
  @Output() hideModule: EventEmitter<Object> = new EventEmitter();
  @Output() unhideModule: EventEmitter<Class> = new EventEmitter();
  public showMoreInfo: boolean = false;
  public hidden: boolean = false;

  constructor(
    private _datetimeService: DatetimeService,
    private _authService: AuthService
  ) { }

  ngOnInit() { }

  public IsLoggedIn = (): boolean => this._authService.IsLoggedIn();

  ShowMoreInfo = (): boolean => this.showMoreInfo = !this.showMoreInfo;

  GetLecturers = (): string => this.class.lecturers.join(' & ');

  GetClassDuration = (): string => this._datetimeService.ReadableDuration(this._datetimeService.TimeDuration(this.class.times.start, this.class.times.end));

  IsCurrentClass = (): boolean => this.day === this._datetimeService.GetDayOfWeek() && moment(new Date()).isBetween(this.class.times.start, this.class.times.end);
  
  HideModule = (): void => {
    this.hidden = true;
    this.hideModule.emit({ class: this.class, day: this.day });
  }

  UnhideModule = (): void => {
    this.hidden = false;
    this.unhideModule.emit(this.class);
  }

}
