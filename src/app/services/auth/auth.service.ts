import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  readonly baseURL: string = environment.apiURL;

  constructor(private _http: HttpClient) { }

  public Register = (studentEmail: string, name: string, password: string) => this._http.post(`${this.baseURL}/register`, { studentEmail, name, password });

  public CheckConfirmationCode = (code: string) => this._http.post(`${this.baseURL}/confirm`, { code });

  public Login = (studentID: string, password: string) => this._http.post(`${this.baseURL}/login`, { studentID, password });

  public IsLoggedIn = () => localStorage.getItem('authToken') && localStorage.getItem('studentID');

  public Logout = () => localStorage.clear();

}
