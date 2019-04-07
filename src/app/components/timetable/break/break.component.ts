import { Component, Input } from '@angular/core';
import Break from '../../../models/break.model';
import { TimetableService } from '../../../services/timetable/timetable.service';

@Component({
  selector: 'timetable-break',
  templateUrl: './break.component.html',
  styleUrls: ['./break.component.less']
})

export class BreakComponent {

  @Input() public break: Break;

  constructor(private _timetableService: TimetableService) { }

  public BreakLength = (): string => this._timetableService.BlockLengthReadable(this.break)

}
