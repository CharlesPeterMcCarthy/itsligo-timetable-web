import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  readonly baseURL: string = environment.apiURL;

  constructor(
    private _http: HttpClient,
    private _userService: UserService
  ) { }

  public Register = (studentEmail: string, name: string, password: string) => this._http.post(`${this.baseURL}/register`, { open: false, studentEmail, name, password });

  public OpenRegister = (username: string, password: string) => this._http.post(`${this.baseURL}/register`, { open: true, username, password });

  public CheckConfirmationCode = (code: string) => this._http.post(`${this.baseURL}/confirm`, { code });

  public Login = (username: string, password: string) => this._http.post(`${this.baseURL}/login`, { username, password });

  public IsLoggedIn = (): boolean => !!(this._userService.AuthToken() && this._userService.StudentID());

  public Logout = () => localStorage.clear();

}
