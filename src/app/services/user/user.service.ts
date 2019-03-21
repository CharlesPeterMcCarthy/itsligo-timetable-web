import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor() { }

  public StudentID = (): string => localStorage.getItem('studentID');

  public TimetableURL = (): string => localStorage.getItem('timetableURL');

  public AuthToken = (): string => localStorage.getItem('authToken');

  public SetStudentID = (studentID: string): void => localStorage.setItem('studentID', studentID);

  public SetTimetableURL = (timetableURL: string): void => localStorage.setItem('timetableURL', timetableURL);

  public SetAuthToken = (authToken: string): void => localStorage.setItem('authToken', authToken);

  public ClearUserData = (): void => localStorage.clear();

  public SetUserData = (data: object): void => {
    this.SetStudentID(data['user']['studentID']);
    this.SetAuthToken(data['authToken']);
    if (data['user']['timetableURL']) this.SetTimetableURL(data['user']['timetableURL']);
  }

}
