import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class TimetableAPIService {
  
  readonly baseURL: string = environment.apiURL;

  constructor(private _http: HttpClient) {}
   public Login = (studentID: string, password: string) => this._http.post(`${this.baseURL}/login`, {"studentID": studentID, "password": password})

  // public register = (studentID: string, name: string, password: string) => this.httpClient.post(`${this.baseURL}/register`, {"studentID": studentID, "name": name, "password": password})

  public GetTimetable = (timetableURL: string) => this._http.post(`${this.baseURL}/timetable`, {"TimetableURL": timetableURL})

  // public AuthenticateUser = (AuthToken: string, StudentID: string) => this.httpClient.post(`${this.baseURL}/auth`, {"AuthToken": AuthToken, "StudentID": StudentID})

  // public ChangeTimetable = (AuthToken: string, StudentID: string, TimetableURL: string) => this.httpClient.post(`${this.baseURL}/change-timetable`,{"AuthToken": AuthToken, "StudentID": StudentID, "TimetableURL": TimetableURL});

}