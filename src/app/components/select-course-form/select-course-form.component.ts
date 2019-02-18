import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'select-course-form',
  templateUrl: './select-course-form.component.html',
  styleUrls: ['./select-course-form.component.less']
})

export class SelectCourseFormComponent implements OnInit {
  
  departments: Object[]
  courses: Object[]
  selectedDept: number
  selectedCourse: number

  constructor() {
    this.departments = [{id: '1', name: 'Department 1'}, {id: '2', name: 'Department 2'}, {id: '3', name: 'Department 3'}]
    this.courses = [{id: '1', name: 'Course 1'}, {id: '2', name: 'Course 2'}, {id: '3', name: 'Course 3'}]
  }

  ngOnInit() { }

  SetDepartment(deptID) {
    this.selectedDept = deptID
    console.log(deptID)

    return false
  }

  SetCourse(courseID) {
    this.selectedCourse = courseID
    console.log(this.selectedCourse)

    return false
  }

  ViewTimetable() {
    console.log(`Viewing department ${this.selectedDept}, course ${this.selectedCourse}`)
  }

}
