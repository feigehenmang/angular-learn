import { TestBed } from '@angular/core/testing';

import { InjectService } from './inject.service';

describe('InjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InjectService = TestBed.get(InjectService);
    expect(service).toBeTruthy();
  });
});
