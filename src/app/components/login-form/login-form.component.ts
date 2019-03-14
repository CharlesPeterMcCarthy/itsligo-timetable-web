import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.less']
})

export class LoginFormComponent implements OnInit {

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _toastr: ToastrService
  ) { }

  ngOnInit() { }

  Login = (StudentID: string, Password: string): void => {
    localStorage.clear();
    
    this._authService.Login(StudentID, Password).subscribe((res) => {
      console.log(res);

      if (res['Access-Token']) {
        localStorage.setItem('AuthToken', res['Access-Token']);
        localStorage.setItem('StudentID', res['user']['StudentID']);
        if (res['user']['TimetableURL']) localStorage.setItem('TimetableURL', res['user']['TimetableURL']);
        this._router.navigate(['timetable']);
      }
    }, (err) => {
      this._toastr.error(err.error.errorText);
    })
  }

}
