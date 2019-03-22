import { Injectable } from '@angular/core';
import { DatetimeService } from '../datetime/datetime.service';
import { _ } from 'underscore';
import * as moment from 'moment';
import Timetable from '../../models/timetable';
import Day from '../../models/day.model';
import TimetableModule from '../../models/timetable-module.model';
import Break from '../../models/break.model';

@Injectable({
  providedIn: 'root'
})

export class TimetableService {

  constructor(private _datetimeService: DatetimeService) { }

  public Today = (timetable: Timetable): Day => _.findWhere(timetable.Days, { day: this._datetimeService.GetDayOfWeek() });

  public HaveModulesLeft = (timetable: Timetable): boolean => !!this.ModulesLeft(timetable);

  public ModulesLeft = (timetable: Timetable): boolean => _.find(this.Today(timetable).modules, (mod: TimetableModule) => moment(mod.times.end, 'HH:mm') > this._datetimeService.Now());

  public HaveModulesToday = (timetable: Timetable): boolean => !_.isEmpty(this.Today(timetable).modules);

  public CurrentModule = (timetable: Timetable): TimetableModule[] => _.filter(this.Today(timetable).modules, (mod: TimetableModule) => this.IsNow(mod));

  public CurrentBreak = (timetable: Timetable): Break => _.find(this.Today(timetable).breaks, (br: Break) => this.IsNow(br));
  
  public BlockLengthReadable = (obj: TimetableModule | Break): string => this._datetimeService.ReadableDuration(this._datetimeService.TimeDuration(obj.times.start, obj.times.end));

  private IsNow = (obj: TimetableModule | Break): boolean => this._datetimeService.IsNow(obj.times.start, obj.times.end);

}
