import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor() { }

  public StudentID = (): string => localStorage.getItem('studentID');

  public AuthToken = (): string => localStorage.getItem('authToken');

  public AccountType = (): string => localStorage.getItem('accountType');

  public TimetableURL = (): string => localStorage.getItem('timetableURL');

  public SetStudentID = (studentID: string): void => localStorage.setItem('studentID', studentID);

  public SetAuthToken = (authToken: string): void => localStorage.setItem('authToken', authToken);

  public SetAccountType = (accountType: string): void => localStorage.setItem('accountType', accountType);

  public SetTimetableURL = (timetableURL: string): void => localStorage.setItem('timetableURL', timetableURL);

  public ClearUserData = (): void => localStorage.clear();

  public SetUserData = (data: object): void => {
    this.SetStudentID(data['user']['studentID']);
    this.SetAuthToken(data['authToken']);
    if (data['user']['accountType']) this.SetAccountType(data['user']['accountType']);
    if (data['user']['timetableURL']) this.SetTimetableURL(data['user']['timetableURL']);
  }

}
