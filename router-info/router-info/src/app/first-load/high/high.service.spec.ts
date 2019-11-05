import { TestBed } from '@angular/core/testing';

import { HighService } from './high.service';

describe('HighService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HighService = TestBed.get(HighService);
    expect(service).toBeTruthy();
  });
});
