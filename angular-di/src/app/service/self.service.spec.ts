import { TestBed } from '@angular/core/testing';

import { SelfService } from './self.service';

describe('SelfService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelfService = TestBed.get(SelfService);
    expect(service).toBeTruthy();
  });
});
