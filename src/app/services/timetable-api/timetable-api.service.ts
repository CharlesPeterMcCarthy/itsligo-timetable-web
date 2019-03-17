import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { _ } from 'underscore';
import { environment } from '../../../environments/environment';
import Timetable from '../../models/timetable';
import Day from '../../models/day.model';
import Class from '../../models/class.model';
import Break from '../../models/break.model';

@Injectable({
  providedIn: 'root'
})

export class TimetableApiService {
  
  readonly baseURL: string = environment.apiURL;

  constructor(private _http: HttpClient) {}

  public GetTimetable = (timetableURL: string): Observable<Timetable> => this._http.post(`${this.baseURL}/timetable`, { timetableURL, includeClasses: true, includeBreaks: true, checkConflicts: true })
    .pipe(
      map(data => {
        return new Timetable(_.map(data['timetable']['days'], (day) => {
          day['classes'] = _.map(day.classes, (cl) => new Class(cl));
          day['breaks'] = _.map(day.breaks, (br) => new Break(br));
          return new Day(day);
        }));
      })
    );

  public GetDepartments = () => this._http.get(`${this.baseURL}/departments`);

  public GetDepartmentCourses = (department: string) => this._http.get(this.CleanURL(`${this.baseURL}/courses?department=${department}`));

  public ChangeTimetable = (studentID: string, timetableURL: string) => this._http.post(`${this.baseURL}/change-timetable`, this.AttachAuthToken({ "StudentID": studentID, "TimetableURL": timetableURL }));

  private CleanURL = (url) => url.replace('&', '%26');

  private AttachAuthToken = (data: Object): Object => { return { ...data, 'AuthToken': localStorage.getItem('AuthToken') } };

}