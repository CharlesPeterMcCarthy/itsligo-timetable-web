import { Component, OnInit, Input } from '@angular/core';
import { Class } from '../../models/class.model';

@Component({
  selector: 'timetable-class',
  templateUrl: './timetable-class.component.html',
  styleUrls: ['./timetable-class.component.less']
})

export class TimetableClassComponent implements OnInit {

  @Input() class: Class;
  showMoreInfo: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  ShowMoreInfo(): void {
    this.showMoreInfo = !this.showMoreInfo;
  }

  GetLecturers(): string {
    return this.class.lecturers.join(' & ');
  }

  GetClassDuration(): string {
    const classDuration = parseInt(this.class.duration);
    return `${classDuration} hour` + (classDuration > 1 ? 's' : '');
  }

}
