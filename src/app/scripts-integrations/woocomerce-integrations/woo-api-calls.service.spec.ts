import { TestBed } from '@angular/core/testing';

import { WooApiCallsService } from './woo-api-calls.service';

describe('WooApiCallsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WooApiCallsService = TestBed.get(WooApiCallsService);
    expect(service).toBeTruthy();
  });
});
