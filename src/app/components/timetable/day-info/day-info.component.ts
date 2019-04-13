import { Component, OnInit, Input } from '@angular/core';
import Day from 'src/app/models/day.model';
import * as moment from 'moment';

@Component({
  selector: 'day-info',
  templateUrl: './day-info.component.html',
  styleUrls: ['./day-info.component.less']
})

export class DayInfoComponent implements OnInit {

  @Input() public day: Day;
  public startsAt: string;
  public endsAt: string;

  constructor() { }

  ngOnInit() {
    this.SetStartTime();
    this.SetEndTime();
  }

  private SetStartTime = () => this.startsAt = moment(this.day.modules[0].times.start).format('HH:mm A');

  private SetEndTime = () => this.endsAt = moment(this.day.modules[this.day.modules.length - 1].times.end).format('HH:mm A');

}
