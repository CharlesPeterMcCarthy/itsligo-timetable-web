import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import TimetableModule from '../../../models/timetable-module.model';
import { DatetimeService } from '../../../services/datetime/datetime.service';
import * as moment from 'moment';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'timetable-module',
  templateUrl: './timetable-module.component.html',
  styleUrls: ['./timetable-module.component.less']
})

export class TimetableModuleComponent implements OnInit {

  @Input() module: TimetableModule;
  @Input() day: string;
  @Input() conflicting: boolean;
  @Output() hideModule: EventEmitter<Object> = new EventEmitter();
  @Output() unhideModule: EventEmitter<TimetableModule> = new EventEmitter();
  public showMoreInfo: boolean = false;
  public hidden: boolean = false;

  constructor(
    private _datetimeService: DatetimeService,
    private _authService: AuthService
  ) { }

  ngOnInit() { }

  public IsLoggedIn = (): boolean => this._authService.IsLoggedIn();

  ShowMoreInfo = (): boolean => this.showMoreInfo = !this.showMoreInfo;

  GetLecturers = (): string => this.module.lecturers.join(' & ');

  GetModuleDuration = (): string => this._datetimeService.ReadableDuration(this._datetimeService.TimeDuration(this.module.times.start, this.module.times.end));

  IsCurrentModule = (): boolean => this.day === this._datetimeService.GetDayOfWeek() && moment(new Date()).isBetween(this.module.times.start, this.module.times.end);
  
  HideModule = (): void => {
    this.hidden = true;
    this.hideModule.emit({ module: this.module, day: this.day });
  }

  UnhideModule = (): void => {
    this.hidden = false;
    this.unhideModule.emit(this.module);
  }

}
