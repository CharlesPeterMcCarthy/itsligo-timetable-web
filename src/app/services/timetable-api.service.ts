import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TimetableAPIService {
  
  readonly baseURL: string = 'https://qtal13xg9c.execute-api.eu-west-1.amazonaws.com/dev'

  constructor(private httpClient: HttpClient) {}

  public GetTimetable = (timetableURL: string) => this.httpClient.post(`${this.baseURL}/timetable`, {"TimetableURL": timetableURL})

}