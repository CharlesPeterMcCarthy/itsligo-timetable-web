import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TimetableApiService } from '../../../services/timetable-api/timetable-api.service';
import { ToastrService } from 'ngx-toastr';
import { _ } from 'underscore';
import { AuthService } from '../../../services/auth/auth.service';
import { UserService } from '../../../services/user/user.service';
import Department from '../../../models/department.model';
import Course from '../../../models/course.model';

@Component({
  selector: 'select-course-form',
  templateUrl: './select-course-form.component.html',
  styleUrls: ['./select-course-form.component.less']
})

export class SelectCourseFormComponent implements OnInit {
  
  public departments: Department[];
  public courses: Course[];
  public selectedCourse: Course;
  private selectedDept: Department;
  private changingTimetable: boolean = false;

  constructor(
    private _timetableAPI: TimetableApiService,
    private _authService: AuthService,
    private _router: Router,
    private _toastr: ToastrService,
    private _userService: UserService
  ) {
    this.GetDepartments();
  }

  ngOnInit() {}

  private GetDepartments = (): void => {
    this._timetableAPI.GetDepartments().subscribe(
      (data) => this.departments = data,
      (err) => this._toastr.error(err.error.errorText)
    );
  }

  private GetCourses = (): void => {
    this._timetableAPI.GetDepartmentCourses(this.selectedDept.name).subscribe(
      (data) => this.courses = data, 
      (err) => this._toastr.error(err.error.errorText)
    );
  }

  public HasCourses = (): boolean => this.courses && !!this.courses.length;

  public HasDepartments = (): boolean => this.departments && !!this.departments.length;

  public SetDepartment = (dept: Department): void => {
    this.selectedDept = dept;
    this.courses = null;
    this.GetCourses();
  }

  public SetCourse = (course: Course) => this.selectedCourse = course;

  public ViewTimetable = (semesterNum: number): boolean => {
    if (this.changingTimetable) return; // Prevent double clicking

    const url = this.selectedCourse['url'][`semester${semesterNum}`];
    
    if (this._authService.IsLoggedIn()) {
      this.changingTimetable = true;

      this._timetableAPI.ChangeTimetable(this._userService.Username(), url).subscribe(
        () => {
          this._userService.SetTimetableURL(url);
          this.changingTimetable = false;
          this._router.navigate(['timetable']);
        }
      );
    } else {
      this._userService.SetTimetableURL(url);
      this._router.navigate(['timetable']);
    }

    return false;
  }

}
