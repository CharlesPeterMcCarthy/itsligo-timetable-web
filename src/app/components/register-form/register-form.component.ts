import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.less']
})

export class RegisterFormComponent implements OnInit {

  @Output() registered: EventEmitter<boolean> = new EventEmitter();
  //private isRegistered: boolean = false;

  constructor(
    private _authService: AuthService, 
    private _toastr: ToastrService
  ) { }

  ngOnInit() { }

  Register = (StudentEmail: string, Name: string, Password: string): void => {
    this._authService.Register(StudentEmail, Name, Password).subscribe((res) => {
      console.log(res);
     // this.isRegistered = true;
      this.registered.emit(true);
      //this.heading = "Registered";
    }, (err) => {
      console.log(err);
      this._toastr.error(err.error.errorText);
    })
  }

}
