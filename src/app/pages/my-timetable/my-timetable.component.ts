import { Component, OnInit } from '@angular/core';
import { TimetableApiService } from '../../services/timetable-api/timetable-api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-my-timetable',
  templateUrl: './my-timetable.component.html',
  styleUrls: ['./my-timetable.component.less']
})

export class MyTimetableComponent implements OnInit {
  heading: string = "";
  timetableURL: string = "http://timetables.itsligo.ie:81/reporting/textspreadsheet;student+set;id;SG_KCOMP_H08%2FF%2FY2%2F1%2F%28A%29%0D%0A?t=student+set+textspreadsheet&days=1-7&weeks=26&periods=3-20&template=student+set+textspreadsheet";
  timetable: Object;

  constructor(private TimetableAPI: TimetableApiService, private toastr: ToastrService) {
    this.GetTimetable();
  }

  ngOnInit() {
  }

  GetTimetable = () =>
    this.TimetableAPI.GetTimetable(this.timetableURL).subscribe((res) => {
      console.log(res);
      this.timetable = res;    
    }, (err) => {
      console.log(err);
      this.toastr.error("Error", "An Error occurred while retrieving your timetable.");
    })

}