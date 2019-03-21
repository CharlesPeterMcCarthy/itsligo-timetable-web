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
  
  public departments: string[];
  public courses: Object[];
  public selectedCourse: Object;
  private selectedDept: string;

  constructor(
    private _timetableAPI: TimetableApiService,
    private _authService: AuthService,
    private _router: Router,
    private _toastr: ToastrService
  ) {
    this.GetDepartments();
  }

  ngOnInit() {}

  private GetDepartments = (): void => {
    this._timetableAPI.GetDepartments().subscribe(
      (res) => this.departments = res['departments'],
      (err) => this._toastr.error(err.error.errorText)
    );
  }

  private GetCourses = (): void => {
    this._timetableAPI.GetDepartmentCourses(this.selectedDept).subscribe(
      (res) => {
        this.courses = res['courses'];
      }, 
      (err) => this._toastr.error(err.error.errorText)
    );
  }

  public HasCourses = (): boolean => this.courses && !!this.courses.length;

  public HasDepartments = (): boolean => this.departments && !!this.departments.length;

  public SetDepartment = (dept): void => {
    this.selectedDept = dept;
    this.courses = null;
    this.GetCourses();
  }

  public SetCourse = (course: Object) => this.selectedCourse = course;

  public ViewTimetable = (semesterNum: number): boolean => {
    const url = this.selectedCourse['url'][`semester${semesterNum}`];
    if (this._authService.IsLoggedIn()) {
      this._timetableAPI.ChangeTimetable(localStorage.getItem('studentID'), url).subscribe(
        () => {
          localStorage.setItem('timetableURL', url);
          this._router.navigate(['timetable']);
        }, 
        (err) => this._toastr.error(err.error.errorText)
      );
    } else {
      localStorage.setItem('timetableURL', url);
      this._router.navigate(['timetable']);
    }

    return false;
  }

}
