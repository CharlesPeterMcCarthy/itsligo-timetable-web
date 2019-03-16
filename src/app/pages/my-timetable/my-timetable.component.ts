import { Component, OnInit, Input } from '@angular/core';
import { TimetableApiService } from '../../services/timetable-api/timetable-api.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import Day from '../../models/day.model';
import { _ } from 'underscore';

@Component({
  selector: 'app-my-timetable',
  templateUrl: './my-timetable.component.html',
  styleUrls: ['./my-timetable.component.less']
})

export class MyTimetableComponent implements OnInit {
  timetableURL: string = localStorage.getItem('TimetableURL');
  heading: string = "My Timetable";
  timetable: Object;

  constructor(
    private _timetableAPI: TimetableApiService,
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
      this._timetableAPI.GetTimetable(this.timetableURL).subscribe((res) => {        
        this.timetable = res['timetable']['days'];    
      }, (err) => {
        console.log(err);
        this._toastr.error(err.error.errorText);
      });
    }
  }

  public GetDay = (day): Day => new Day(day);

}