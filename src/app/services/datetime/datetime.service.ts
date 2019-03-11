import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DatetimeService {

  constructor() { }

  public GetDayOfWeek = (): string => ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][new Date().getDay()];

}
