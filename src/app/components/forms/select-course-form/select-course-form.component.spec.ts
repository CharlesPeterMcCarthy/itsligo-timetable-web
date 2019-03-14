import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCourseFormComponent } from './select-course-form.component';

describe('SelectCourseFormComponent', () => {
  let component: SelectCourseFormComponent;
  let fixture: ComponentFixture<SelectCourseFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectCourseFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCourseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
