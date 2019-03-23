import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user/user.service';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import User from '../../models/user.model';
import { _ } from 'underscore';

@Injectable({
  providedIn: 'root'
})

export class AdminService {

  readonly baseURL: string = environment.apiURL;

  constructor(
    private _http: HttpClient,
    private _userService: UserService
  ) { }

  public IsAdmin = (): boolean => this._userService.AccountType() === "Admin";

  public GetUsers = (): Observable<User[]> => this._http.post(`${this.baseURL}/admin/get-users`, this.AttachAuthToken({ studentID: this._userService.StudentID() }))
    .pipe(map(data => _.map(data['users'], (u) => new User(u))));

  private AttachAuthToken = (data: Object): object => { return { ...data, 'authToken': this._userService.AuthToken() } };

}
