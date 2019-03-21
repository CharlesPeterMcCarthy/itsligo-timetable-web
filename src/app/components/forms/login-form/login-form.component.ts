import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.less']
})

export class LoginFormComponent implements OnInit {

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _toastr: ToastrService,
    private _userService: UserService
  ) { }

  ngOnInit() { }

  Login = (StudentID: string, Password: string): void => {
    this._userService.ClearUserData();
    
    this._authService.Login(StudentID, Password).subscribe((res) => {
      console.log(res);

      if (res['authToken']) {
        this._userService.SetUserData(res);
        this._router.navigate(['timetable']);
      }
    }, (err) => {
      this._toastr.error(err.error.errorText);
    })
  }

}
