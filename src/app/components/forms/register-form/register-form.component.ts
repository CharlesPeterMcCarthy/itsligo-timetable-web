import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { ToastrService, ActiveToast } from 'ngx-toastr';
import { environment } from '../../../../environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.less']
})

export class RegisterFormComponent implements OnInit {

  @Output() registered: EventEmitter<boolean> = new EventEmitter();
  public openRegistration: boolean = environment.openRegistration;

  constructor(
    private _authService: AuthService, 
    private _toastr: ToastrService,
    private _spinner: NgxSpinnerService
  ) { }

  ngOnInit() { }

  public ShowSpinner = () => this._spinner.show();

  public HideSpinner = () => this._spinner.hide();

  public EmailRegister = (StudentEmail: string, Password: string, ConfirmPassword: string): void | ActiveToast<any> => {
    if (Password !== ConfirmPassword) return this._toastr.warning('Passwords do not match');

    this.ShowSpinner();

    this._authService.Register(StudentEmail, Password).subscribe((res) => {
      this.HideSpinner();
      this.registered.emit(true);
    }, (err) => {
      this.HideSpinner();
      this._toastr.error(err.error.errorText);
    })
  }

  public OpenRegister = (Username: string, Password: string, ConfirmPassword: string): void | ActiveToast<any> => {
    if (Password !== ConfirmPassword) return this._toastr.warning('Passwords do not match');
    
    this.ShowSpinner();

    this._authService.OpenRegister(Username, Password).subscribe((res) => {
      this.HideSpinner();
      this.registered.emit(true);
    }, (err) => {
      this.HideSpinner();
      this._toastr.error(err.error.errorText);
    })
  }

}
