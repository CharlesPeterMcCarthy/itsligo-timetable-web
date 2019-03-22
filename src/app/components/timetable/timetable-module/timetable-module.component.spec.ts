import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetableModuleComponent } from './timetable-module.component';

describe('TimetableModuleComponent', () => {
  let component: TimetableModuleComponent;
  let fixture: ComponentFixture<TimetableModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimetableModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetableModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
