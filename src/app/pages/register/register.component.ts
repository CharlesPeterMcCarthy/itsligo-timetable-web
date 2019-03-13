import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})

export class RegisterComponent implements OnInit {

  heading: string = "Register";
  isRegistered: boolean = false;

  constructor(
    private _authService: AuthService, 
    private _toastr: ToastrService
  ) { }

  ngOnInit() { }

  Register = (StudentEmail: string, Name: string, Password: string): void => {
    this._authService.Register(StudentEmail, Name, Password).subscribe((res) => {
      console.log(res);
      this.isRegistered = true;
      this.heading = "Registered";
    }, (err) => {
      console.log(err);
      this._toastr.error(err.error.errorText);
    })
  }

}
