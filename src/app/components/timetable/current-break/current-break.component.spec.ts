import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentBreakComponent } from './current-break.component';

describe('CurrentBreakComponent', () => {
  let component: CurrentBreakComponent;
  let fixture: ComponentFixture<CurrentBreakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentBreakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentBreakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
