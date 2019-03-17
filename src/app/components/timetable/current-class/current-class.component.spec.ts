import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentClassComponent } from './current-class.component';

describe('CurrentClassComponent', () => {
  let component: CurrentClassComponent;
  let fixture: ComponentFixture<CurrentClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
