import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.less']
})
export class ConfirmEmailComponent implements OnInit {

  private confirmationCode: string;
  heading: string = "";
  isConfirmed: boolean = false;

  constructor(
    private _route: ActivatedRoute,
    private _authService: AuthService,
    private _toastr: ToastrService
  ) {
    this.confirmationCode = this._route.snapshot.paramMap.get('code');

    this.CheckConfirmationCode();
  }

  ngOnInit() {}

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
