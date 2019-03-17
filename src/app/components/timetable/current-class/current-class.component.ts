import { Component, Input } from '@angular/core';
import Class from '../../../models/class.model';
import { _ } from 'underscore';
import { TimetableService } from '../../../services/timetable/timetable.service';

@Component({
  selector: 'current-class',
  templateUrl: './current-class.component.html',
  styleUrls: ['./current-class.component.less']
})

export class CurrentClassComponent {

  @Input() classes: Class[];

  constructor(private _timetableService: TimetableService) { }

  public Rooms = (cl: Class): string => _.map(cl.rooms, (room) => `${room.code} <small>(${room.type})</small>`).join(', ');

  public ClassLength = (cl: Class) => this._timetableService.BlockLengthReadable(cl);
  
}
