import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})

export class RegisterComponent implements OnInit {

  heading: string = "Register"

  constructor(
    private _authService: AuthService, 
    private _toastr: ToastrService
  ) { }

  ngOnInit() { }

  Register = (StudentEmail: HTMLInputElement, Name: HTMLInputElement, Password: HTMLInputElement): void => {
    this._authService.Register(StudentEmail.value, Name.value, Password.value).subscribe((res) => {
      console.log(res);
    }, (err) => {
      console.log(err)
      this._toastr.error(err.error.errorText);
    })
  }

}
