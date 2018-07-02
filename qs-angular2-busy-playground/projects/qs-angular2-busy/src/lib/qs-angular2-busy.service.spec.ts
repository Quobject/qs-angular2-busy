import { TestBed, inject } from '@angular/core/testing';

import { QsAngular2BusyService } from './qs-angular2-busy.service';

describe('QsAngular2BusyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QsAngular2BusyService]
    });
  });

  it('should be created', inject([QsAngular2BusyService], (service: QsAngular2BusyService) => {
    expect(service).toBeTruthy();
  }));
});
