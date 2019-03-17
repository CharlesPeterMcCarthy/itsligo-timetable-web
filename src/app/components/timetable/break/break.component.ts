import { Component, OnInit, Input } from '@angular/core';
import Break from '../../../models/break.model';
import * as moment from 'moment';
import { TimetableService } from '../../../services/timetable/timetable.service';

@Component({
  selector: 'timetable-break',
  templateUrl: './break.component.html',
  styleUrls: ['./break.component.less']
})

export class BreakComponent implements OnInit {

  @Input() break: Break;

  constructor(private _timetableService: TimetableService) { }

  ngOnInit() { }

  public BreakLength = (): string => this._timetableService.BlockLengthReadable(this.break)

}
