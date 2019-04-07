import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user/user.service';
import { environment } from '../../../../environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.less']
})

export class LoginFormComponent {

  public openRegistration: boolean = environment.openRegistration;

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _toastr: ToastrService,
    private _userService: UserService,
    private _spinner: NgxSpinnerService
  ) { }

  public ShowSpinner = () => this._spinner.show();

  public HideSpinner = () => this._spinner.hide();

  public Login = (username: string, password: string): void => {
    this.ShowSpinner();
    this._userService.ClearUserData();

    this._authService.Login(username, password).subscribe((res) => {
      if (res['authToken']) {
        this._userService.SetUserData(res);
        this._router.navigate(['timetable']);
      }

      this.HideSpinner();
    }, (err) => {
      this._toastr.error(err.error.errorText);
      this.HideSpinner();
    })
  }

}
