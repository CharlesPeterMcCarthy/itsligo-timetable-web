import { Component, Input } from '@angular/core';
import TimetableModule from '../../../models/timetable-module.model';
import { _ } from 'underscore';
import { TimetableService } from '../../../services/timetable/timetable.service';

@Component({
  selector: 'current-module',
  templateUrl: './current-module.component.html',
  styleUrls: ['./current-module.component.less']
})

export class CurrentModuleComponent {

  @Input() modules: TimetableModule[];

  constructor(private _timetableService: TimetableService) { }

  public Rooms = (mod: TimetableModule): string => _.map(mod.rooms, (room) => `${room.code} <small>(${room.type})</small>`).join(', ');

  public ModuleLength = (mod: TimetableModule) => this._timetableService.BlockLengthReadable(mod);
  
}
