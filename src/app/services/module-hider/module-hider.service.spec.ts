import { TestBed } from '@angular/core/testing';

import { ModuleHiderService } from './module-hider.service';

describe('ModuleHiderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModuleHiderService = TestBed.get(ModuleHiderService);
    expect(service).toBeTruthy();
  });
});
