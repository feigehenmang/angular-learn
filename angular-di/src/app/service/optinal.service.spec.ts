import { TestBed } from '@angular/core/testing';

import { OptinalService } from './optinal.service';

describe('OptinalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OptinalService = TestBed.get(OptinalService);
    expect(service).toBeTruthy();
  });
});
