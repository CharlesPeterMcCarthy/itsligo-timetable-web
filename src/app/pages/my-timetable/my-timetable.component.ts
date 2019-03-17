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
  timetableURL: string = localStorage.getItem('TimetableURL');
  heading: string = "My Timetable";
  timetable: Timetable;

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
        // this.timetable.Days[6].classes = this.timetable.Days[1].classes;
        // this.timetable.Days[6].classes[4].times.end = "16:59";
        // this.timetable.Days[6].classes.pop();
      }, (err) => {
        this._toastr.error(err.error.errorText);
      });
    }
  }

  public FinishedForTheDay = (): boolean => !this._timetableService.HaveClassesLeft(this.timetable);

  public HaveClassToday = (): boolean => this._timetableService.HaveClassToday(this.timetable);

  public Today = (): Day => this._timetableService.Today(this.timetable);

  public HasClassNow = (): boolean => !_.isEmpty(this.CurrentClass())

  public HasBreakNow = (): boolean => !!this.CurrentBreak()

  public CurrentClass = (): Class[] => {
    const today: Day = this.Today()
    return _.filter(today.classes, (cl: Class) => this._timetableService.IsNow(cl));
  }

  public CurrentBreak = (): Break => {
    const today: Day = this.Today();
    return _.find(today.breaks, (br: Break) => this._timetableService.IsNow(br));
  }

}