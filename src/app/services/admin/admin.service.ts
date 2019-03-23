import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user/user.service';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AdminService {

  readonly baseURL: string = environment.apiURL;

  constructor(
    private _http: HttpClient,
    private _userService: UserService
  ) { }

  public GetUsers = (): Observable<object> => this._http.post(`${this.baseURL}/admin/get-users`, this.AttachAuthToken({ studentID: this._userService.StudentID() }));

  private AttachAuthToken = (data: Object): object => { return { ...data, 'authToken': this._userService.AuthToken() } };

}
