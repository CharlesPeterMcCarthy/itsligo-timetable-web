import { Component, OnInit, Input } from '@angular/core';
import { TimetableApiService } from '../../services/timetable-api/timetable-api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-my-timetable',
  templateUrl: './my-timetable.component.html',
  styleUrls: ['./my-timetable.component.less']
})

export class MyTimetableComponent implements OnInit {
  @Input() timetableURL: string = this.timetableURL || localStorage.getItem('TimetableURL');
  heading: string = "My Timetable";
  timetable: Object;

  constructor(
    private _timetableAPI: TimetableApiService,
    private _toastr: ToastrService
  ) {
    this.GetTimetable();
  }

  ngOnInit() { }

  GetTimetable = (): void | object => {
    if (!this.timetableURL) return this._toastr.error("No Timetable URL");

    this._timetableAPI.GetTimetable(this.timetableURL).subscribe((res) => {
      console.log(res);
      this.timetable = res['timetable']['days'];    
    }, (err) => {
      console.log(err);
      this._toastr.error("Error", "An Error occurred while retrieving your timetable.");
    });
  }

}