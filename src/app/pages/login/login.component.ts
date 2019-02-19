import { Component, OnInit } from '@angular/core';
import { TimetableAPIService } from '../../services/timetable-api.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})

export class LoginComponent implements OnInit {

  constructor(
    private TimetableAPI: TimetableAPIService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }

  Login(StudentID: HTMLInputElement, Password: HTMLInputElement): void {
    this.TimetableAPI.Login(StudentID.value, Password.value).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/timetable']);
    }, (err) => {
      console.log(err);
      this.toastr.error("Error", "An Error occurred while attempting to login.");
    })
  }

}
