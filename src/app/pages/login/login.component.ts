import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})

export class LoginComponent implements OnInit {

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _toastr: ToastrService
  ) { }

  ngOnInit() { }

  Login = (StudentID: HTMLInputElement, Password: HTMLInputElement): void => {
    this._authService.Login(StudentID.value, Password.value).subscribe((res) => {
      console.log(res);

      if (res['Access-Token']) {
        localStorage.setItem('AuthToken', res['Access-Token'])
        localStorage.setItem('StudentID', res['user']['StudentID'])
        localStorage.setItem('TimetableURL', res['user']['TimetableURL'])
      }
    }, (err) => {
      console.log(err)
      this._toastr.error(err.error.errorText);
    })
  }

}
