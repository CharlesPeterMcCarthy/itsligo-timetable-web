import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
      (res) => this.courses = res['courses'], 
      (err) => this._toastr.error(err.error.errorText)
    );
  }

  SetDepartment = (dept): void => {
    this.selectedDept = dept;

    this.GetCourses();
  }

  SetCourse = (course: Object): void => {
    this.selectedCourse = course;
  }

  ViewTimetable = (semesterNum: number): boolean => {
    localStorage.setItem('TimetableURL', this.selectedCourse['url'][`semester${semesterNum}`]);
    this._router.navigate(['timetable']);

    return false;
  }

}
