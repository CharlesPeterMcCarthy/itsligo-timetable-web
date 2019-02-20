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
    private _TimetableAPI: TimetableAPIService,
    private _router: Router,
    private _toastr: ToastrService
  ) { }

  ngOnInit() {
  }

  Login(StudentID: HTMLInputElement, Password: HTMLInputElement): void {
    this._TimetableAPI.Login(StudentID.value, Password.value).subscribe((res) => {
      console.log(res);
    }, (err) => {
      console.log(err)
      this._toastr.error(err.error.errorText);
    })
  }

}
