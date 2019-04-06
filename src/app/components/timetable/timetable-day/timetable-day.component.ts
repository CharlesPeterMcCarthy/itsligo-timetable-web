import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Day from '../../../models/day.model';
import TimetableModule from '../../../models/timetable-module.model';
import Break from '../../../models/break.model';
import { DatetimeService } from '../../../services/datetime/datetime.service';
import { _ } from 'underscore';
import * as moment from 'moment';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { faArrowDown, faArrowUp, faStop } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'timetable-day',
  templateUrl: './timetable-day.component.html',
  styleUrls: ['./timetable-day.component.less'],
  animations: [
    trigger('underlineExpand', [
      state('in', style({ 'width': '0', 'opacity': 0, 'visibility': 'hidden', 'margin-top': '0' })),
      state('out', style({ 'width': '50%', 'opacity': 1, 'visibility': 'visible', 'margin-top': '4px' })),
      transition('* => *', animate('0.2s')),
    ])
  ]
})

export class TimetableDayComponent implements OnInit {

  @Input() day: Day;
  @Output() hideModule: EventEmitter<Object> = new EventEmitter();
  @Output() unhideModule: EventEmitter<TimetableModule> = new EventEmitter();
  public isOpen = false;
  public icons: object = {
    down: faArrowDown,
    up: faArrowUp,
    none: faStop
  }

  constructor(private _datetimeService: DatetimeService) { }

  ngOnInit() {
    this.isOpen = this.day.modules.length && this.IsToday();
  }

  public ToggleModules = (): boolean => this.isOpen = this.day.modules.length ? !this.isOpen : this.isOpen;

  public FindBreak = (endTime: moment.Moment, module: TimetableModule): boolean | Break => {
    const b: Break = _.find(this.day.breaks, (b: Break) => b.times.start.isSame(endTime));
    if (!b) return false;
    const sameTimeClasses = _.filter(this.day.modules, (m: TimetableModule) => m.EndTime() == b.StartTime());
    if (sameTimeClasses.length && module === sameTimeClasses[sameTimeClasses.length - 1]) return b;
    return false;
  }

  public HideModule = (mod: Object): void => this.hideModule.emit(mod);

  public UnhideModule = (mod: TimetableModule): void => this.unhideModule.emit(mod);

  private IsToday = (): boolean => this._datetimeService.GetDayOfWeek() === this.day.day;

}
