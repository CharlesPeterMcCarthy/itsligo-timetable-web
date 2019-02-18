import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'timetable-class',
  templateUrl: './timetable-class.component.html',
  styleUrls: ['./timetable-class.component.less']
})
export class TimetableClassComponent implements OnInit {

  @Input() class: string;

  constructor() { }

  ngOnInit() {
  }

}
