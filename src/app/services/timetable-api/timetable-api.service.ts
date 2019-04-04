import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { _ } from 'underscore';
import { environment } from '../../../environments/environment';
import Timetable from '../../models/timetable.model';
import Day from '../../models/day.model';
import TimetableModule from '../../models/timetable-module.model';
import Break from '../../models/break.model';
import { UserService } from '../user/user.service';
import Department from '../../models/department.model';
import Course from '../../models/course.model';
import HiddenModule from '../../models/hidden-module.model';

@Injectable({
  providedIn: 'root'
})

export class TimetableApiService {
  
  readonly baseURL: string = environment.apiURL;

  constructor(
    private _http: HttpClient,
    private _userService: UserService
  ) {}

  public GetTimetable = (timetableURL: string): Observable<Timetable> => this._http.post(`${this.baseURL}/timetable`, { timetableURL, includeModules: true, includeBreaks: true, checkConflicts: true })
    .pipe(map(data => this.MapTimetable(timetableURL, data)));

  public GetDepartments = (): Observable<Department[]> => this._http.get(`${this.baseURL}/departments`)
    .pipe(map(data => _.map(data['departments'], (d) => new Department(d))));  

  public GetDepartmentCourses = (department: string): Observable<Course[]> => this._http.get(this.CleanURL(`${this.baseURL}/courses?department=${department}`))
    .pipe(map(data => _.map(data['courses'], (c) => new Course(c)))); 

  public ChangeTimetable = (username: string, timetableURL: string): Observable<object> => this._http.post(`${this.baseURL}/change-timetable`, this.AttachAuthToken({ username, timetableURL }));

  public HideModules = (username: string, timetableURL: string, modules: Object[]): Observable<object> => this._http.post(`${this.baseURL}/hide-modules`, this.AttachAuthToken({ username, timetableURL, modules }));

  public RestoreModules = (username: string, timetableURL: string): Observable<object> => this._http.post(`${this.baseURL}/restore-modules`, this.AttachAuthToken({ username, timetableURL }));

  public MyTimetable = (username: string, timetableURL: string): Observable<Timetable> => this._http.post(`${this.baseURL}/my-timetable`, this.AttachAuthToken({ username, timetableURL }))
    .pipe(map(data => _.extend(this.MapTimetable(timetableURL, data), { hiddenModules: this.CreateHiddenModules(data) } )));
 
  private CleanURL = (url): string => url.replace('&', '%26');

  private AttachAuthToken = (data: Object): object => { return { ...data, 'authToken': this._userService.AuthToken() } };

  private MapTimetable = (timetableURL: string, data: object): Timetable => 
    new Timetable(timetableURL, _.map(data['timetable']['days'], (day) => {
      day['modules'] = _.map(day.modules, (mod) => new TimetableModule(mod));
      day['breaks'] = _.map(day.breaks, (br) => new Break(br));
      return new Day(day);
    }));
  
  private CreateHiddenModules = (data: object) => _.map(data['hiddenModules'], mod => new HiddenModule(mod));
    
}