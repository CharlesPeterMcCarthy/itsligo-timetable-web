import { Component, OnInit, Input } from '@angular/core';
import { Class } from '../../models/class.model';

@Component({
  selector: 'timetable-class',
  templateUrl: './timetable-class.component.html',
  styleUrls: ['./timetable-class.component.less']
})

export class TimetableClassComponent implements OnInit {

  @Input() class: Class;

  constructor() { }

  ngOnInit() {
  }

}
