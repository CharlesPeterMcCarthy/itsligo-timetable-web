import { Component, OnInit } from '@angular/core';
import { TimetableApiService } from '../../services/timetable-api/timetable-api.service';
import { ToastrService } from 'ngx-toastr';
import { _ } from 'underscore';

@Component({
  selector: 'select-course-form',
  templateUrl: './select-course-form.component.html',
  styleUrls: ['./select-course-form.component.less']
})

export class SelectCourseFormComponent implements OnInit {
  
  departments: string[];
  courses: Object[];
  selectedDept: string;
  selectedCourse: Object;

  constructor(
    private _timetableAPI: TimetableApiService,
    private _toastr: ToastrService
  ) {
    this.GetDepartments();
  }

  ngOnInit() {}

  GetDepartments = (): void => {
    this._timetableAPI.GetDepartments().subscribe((res) => {
      console.log(res);
      this.departments = res['departments'];
    }, (err) => {
      console.log(err);
    });
  }

  GetCourses = (): void => {
    this._timetableAPI.GetDepartmentCourses(this.selectedDept).subscribe((res) => {
      console.log(res);
      this.courses = res['courses'];
    }, (err) => {
      console.log(err);
    });
  }

  SetDepartment = (dept): boolean => {
    this.selectedDept = dept;
    console.log(this.selectedDept);

    this.GetCourses();

    return false;
  }

  SetCourse = (course: Object): boolean => {
    this.selectedCourse = course;
    console.log(this.selectedCourse);

    return false;
  }

  ViewTimetable = (): boolean => {
    return false;
  }

}
