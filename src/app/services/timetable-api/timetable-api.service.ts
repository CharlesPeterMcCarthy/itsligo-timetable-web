import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class TimetableApiService {
  
  readonly baseURL: string = environment.apiURL;

  constructor(private _http: HttpClient) {}

  public GetTimetable = (timetableURL: string) => this._http.post(`${this.baseURL}/timetable`, {"TimetableURL": timetableURL});

  public GetDepartments = () => this._http.get(`${this.baseURL}/departments`);

  public GetDepartmentCourses = (department: string) => this._http.get(this.CleanURL(`${this.baseURL}/courses?department=${department}`));

  private CleanURL = (url) => url.replace('&', '%26')
}