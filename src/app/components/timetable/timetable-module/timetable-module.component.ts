import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import TimetableModule from '../../../models/timetable-module.model';
import { DatetimeService } from '../../../services/datetime/datetime.service';
import * as moment from 'moment';
import { AuthService } from '../../../services/auth/auth.service';
import { faUndo, faTimes, faExclamation } from '@fortawesome/free-solid-svg-icons';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { _ } from 'underscore';

@Component({
  selector: 'timetable-module',
  templateUrl: './timetable-module.component.html',
  styleUrls: ['./timetable-module.component.less'],
  animations: [
    trigger('textGrow', [
      state('shrink', style({ 'font-size': '16px', 'text-align': 'left' })),
      state('grow', style({ 'font-size': '22px', 'text-align': 'center' })),
      transition('* => *', animate('0.2s')),
    ]),
    trigger('fadeInOut', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [ style({ opacity: 0 }), animate('400ms ease-in-out') ]),
      transition(':leave', animate('200ms ease-in-out', style({ opacity: 0 })))
    ])
  ]
})

export class TimetableModuleComponent implements OnInit, OnDestroy {

  @Input() module: TimetableModule;
  @Input() day: string;
  @Input() conflicting: boolean;
  @Output() hideModule: EventEmitter<Object> = new EventEmitter();
  @Output() unhideModule: EventEmitter<TimetableModule> = new EventEmitter();
  public showMoreInfo: boolean = false;
  public hidden: boolean = false;
  public icons: object = {
    remove: faTimes,
    undo: faUndo,
    warning: faExclamation
  }
  public timeUntil: string;
  public timeUntilInterval;
  public duration: string;
  public rooms: string;
  public roomsBrief: string;
  public lecturers: string;

  constructor(
    private _datetimeService: DatetimeService,
    private _authService: AuthService
  ) { }

  ngOnInit() {
    this.GetModuleDuration();
    this.TimeUntilModule();
    this.GetRooms();
    this.GetRoomsBrief();
    this.GetLecturers();
  }

  ngOnDestroy() {
    clearInterval(this.timeUntilInterval);
  }

  public IsLoggedIn = (): boolean => this._authService.IsLoggedIn();

  public ShowMoreInfo = (): boolean => this.showMoreInfo = !this.showMoreInfo;

  private GetRooms = (): void => this.rooms = _.map(this.module.rooms, r => `<strong>${r.code} <small>(${r.type})</small></strong>`).join(', ') || 'N/A';

  private GetRoomsBrief = (): void => this.roomsBrief = _.map(this.module.rooms, r => `<strong>${r.code}</strong>`).join(', ') || 'N/A';

  private GetLecturers = (): void => this.lecturers = _.map(this.module.lecturers, l => `<strong>${l}</strong>`).join(' & ') || 'N/A';

  private GetModuleDuration = (): string => this.duration = this._datetimeService.ReadableDuration(this._datetimeService.TimeDuration(this.module.times.start, this.module.times.end));

  public TimeUntilModule = () => {
    this.SetTimeUntilModule();

    this.timeUntilInterval = setInterval(() => {
      this.SetTimeUntilModule();
    }, 60000);
  }

  private SetTimeUntilModule = () => {
    if (this.IsCurrentModule()) return this.timeUntil = "On Now";
    
    let dayToGet;
    const dayNum = this._datetimeService.GetDayNumber(this.day);
    const today = moment().isoWeekday();
    const moduleStart = this.module.times.start;
    const timeSet = { hour: moduleStart.get('hour'), minute: moduleStart.get('minute'), 'second': 0 };

    if (today <= dayNum) dayToGet = moment().isoWeekday(dayNum).set(timeSet);
    else dayToGet = moment().add(1, 'weeks').isoWeekday(dayNum).set(timeSet);

    if (dayToGet < moment(new Date())) dayToGet.add(1, 'weeks');

    this.timeUntil = this._datetimeService.BriefReadableDuration(this._datetimeService.TimeDuration(this._datetimeService.Now(), dayToGet));
  }

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
