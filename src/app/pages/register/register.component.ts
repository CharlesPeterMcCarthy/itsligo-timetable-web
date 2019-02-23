import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})

export class RegisterComponent implements OnInit {

  private heading: string = "Register"

  constructor(
    private _authService: AuthService, 
    private _toastr: ToastrService
  ) { }

  ngOnInit() { }

  Register = (StudentID, Name, Password): void => {
    this._authService.Register(StudentID.value, Name.value, Password.value).subscribe((res) => {
      console.log(res);
    }, (err) => {
      console.log(err)
      this._toastr.error(err.error.errorText);
    })
  }

}
