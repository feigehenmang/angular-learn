import { TestBed } from '@angular/core/testing';

import { IdResloveService } from './id-reslove.service';

describe('IdResloveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IdResloveService = TestBed.get(IdResloveService);
    expect(service).toBeTruthy();
  });
});
