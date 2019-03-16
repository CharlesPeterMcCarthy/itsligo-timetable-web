import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TimetableApiService } from '../../../services/timetable-api/timetable-api.service';
import { ToastrService } from 'ngx-toastr';
import { _ } from 'underscore';
import { AuthService } from '../../../services/auth/auth.service';

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
    private _authService: AuthService,
    private _router: Router,
    private _toastr: ToastrService
  ) {
    this.GetDepartments();
  }

  ngOnInit() {}

  GetDepartments = (): void => {
    this._timetableAPI.GetDepartments().subscribe(
      (res) => this.departments = res['departments'],
      (err) => this._toastr.error(err.error.errorText)
    );
  }

  GetCourses = (): void => {
    this._timetableAPI.GetDepartmentCourses(this.selectedDept).subscribe(
      (res) => {
        this.courses = res['courses'];
      }, 
      (err) => this._toastr.error(err.error.errorText)
    );
  }

  HasCourses = (): boolean => this.courses && !!this.courses.length;

  SetDepartment = (dept): void => {
    this.selectedDept = dept;
    this.courses = null;

    this.GetCourses();
  }

  SetCourse = (course: Object): void => {
    this.selectedCourse = course;
  }

  ViewTimetable = (semesterNum: number): boolean => {
    const url = this.selectedCourse['url'][`semester${semesterNum}`];

    if (this._authService.IsLoggedIn()) {
      this._timetableAPI.ChangeTimetable(localStorage.getItem('StudentID'), url).subscribe(
        (res) => {
          localStorage.setItem('TimetableURL', url);
          this._router.navigate(['timetable']);
        }, 
        (err) => this._toastr.error(err.error.errorText)
      );
    } else {
      localStorage.setItem('TimetableURL', url);
      this._router.navigate(['timetable']);
    }

    return false;
  }

}
