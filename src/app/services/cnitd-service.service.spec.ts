import { TestBed, inject } from '@angular/core/testing';

import { CnitdServiceService } from './cnitd-service.service';

describe('CnitdServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CnitdServiceService]
    });
  });

  it('should be created', inject([CnitdServiceService], (service: CnitdServiceService) => {
    expect(service).toBeTruthy();
  }));
});
