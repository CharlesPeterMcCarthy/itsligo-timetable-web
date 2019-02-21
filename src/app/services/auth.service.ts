import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  readonly baseURL: string = environment.apiURL;

  constructor(private _http: HttpClient) { }

  public Login = (studentID: string, password: string) => this._http.post(`${this.baseURL}/login`, {"studentID": studentID, "password": password})

}
