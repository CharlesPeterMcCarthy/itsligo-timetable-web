import { TestBed } from '@angular/core/testing';

import { TimetableApiService } from './timetable-api.service';

describe('TimetableApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimetableApiService = TestBed.get(TimetableApiService);
    expect(service).toBeTruthy();
  });
});
