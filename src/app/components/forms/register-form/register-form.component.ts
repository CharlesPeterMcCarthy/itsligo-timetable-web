import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.less']
})

export class RegisterFormComponent implements OnInit {

  @Output() registered: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private _authService: AuthService, 
    private _toastr: ToastrService
  ) { }

  ngOnInit() { }

  Register = (StudentEmail: string, Name: string, Password: string): void => {
    this._authService.Register(StudentEmail, Name, Password).subscribe((res) => {
      console.log(res);
      this.registered.emit(true);
    }, (err) => {
      console.log(err);
      this._toastr.error(err.error.errorText);
    })
  }

}
