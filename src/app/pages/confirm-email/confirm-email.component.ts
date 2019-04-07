import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.less']
})

export class ConfirmEmailComponent {

  private confirmationCode: string;
  public heading: string = "Confirming Email...";
  public isConfirmed: boolean = false;

  constructor(
    private _title: Title,
    private _route: ActivatedRoute,
    private _authService: AuthService,
    private _toastr: ToastrService
  ) {
    this._title.setTitle('Confirm Email | ITSligo Timetable');

    this.confirmationCode = this._route.snapshot.paramMap.get('code');

    this.CheckConfirmationCode();
  }

  private CheckConfirmationCode = (): void => {
    this._authService.CheckConfirmationCode(this.confirmationCode).subscribe(
      (res) => {
        if (res['ResponseMetadata'] && res['ResponseMetadata']['HTTPStatusCode'] == 200) {
          this.isConfirmed = true;
          this.heading = "Email Confirmed";
        }
      }, 
      (err) => this._toastr.error(err.error.errorText)
    );
  }
}
