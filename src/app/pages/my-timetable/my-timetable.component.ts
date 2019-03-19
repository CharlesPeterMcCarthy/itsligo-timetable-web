import { Component, OnInit, Input } from '@angular/core';
import { TimetableApiService } from '../../services/timetable-api/timetable-api.service';
import { TimetableService } from '../../services/timetable/timetable.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import Day from '../../models/day.model';
import { _ } from 'underscore';
import Class from '../../models/class.model';
import Break from '../../models/break.model';
import Timetable from '../../models/timetable';

@Component({
  selector: 'app-my-timetable',
  templateUrl: './my-timetable.component.html',
  styleUrls: ['./my-timetable.component.less']
})

export class MyTimetableComponent implements OnInit {
  timetableURL: string = localStorage.getItem('timetableURL');
  heading: string = "My Timetable";
  timetable: Timetable;
  private hiddenModules: Object[] = [];

  constructor(
    private _timetableAPI: TimetableApiService,
    private _timetableService: TimetableService,
    private _router: Router,
    private _toastr: ToastrService
  ) {
    this.GetTimetable();
  }

  ngOnInit() { }

  private GetTimetable = (): void | object => {
    if (!this.timetableURL) {
      this._router.navigate(['/']);
    } else {
      this._timetableAPI.GetTimetable(this.timetableURL).subscribe((timetable: Timetable) => {     
        console.log(timetable)
        this.timetable = timetable; 
      }, (err) => {
        this._toastr.error(err.error.errorText);
      });
    }
  }

  public FinishedForTheDay = (): boolean => !this._timetableService.HaveClassesLeft(this.timetable);

  public HaveClassToday = (): boolean => this._timetableService.HaveClassToday(this.timetable);

  public Today = (): Day => this._timetableService.Today(this.timetable);

  public HasClassNow = (): boolean => !_.isEmpty(this.CurrentClass());

  public HasBreakNow = (): boolean => !!this.CurrentBreak();

  public CurrentClass = (): Class[] => this._timetableService.CurrentClass(this.timetable);

  public CurrentBreak = (): Break => this._timetableService.CurrentBreak(this.timetable);

  public HideModule = (cl: Object): number => this.hiddenModules.push(cl);

  public UnhideModule = (cl: Class): void => { this.hiddenModules.splice(this.hiddenModules.indexOf(cl), 1); }

  public HideModules = (): void => {
    _.each(this.hiddenModules, (m) => {
      const d: Day = _.find(this.timetable.Days, (d: Day) => d.day == m.day);
      d.classes.splice(d.classes.indexOf(m.class), 1);
    });

    this.hiddenModules = [];
  }

}