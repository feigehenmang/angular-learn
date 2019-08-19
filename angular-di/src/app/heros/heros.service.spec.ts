import { TestBed } from '@angular/core/testing';

import { HerosService } from './heros.service';

describe('HerosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HerosService = TestBed.get(HerosService);
    expect(service).toBeTruthy();
  });
});
