/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MemberserviceService } from './memberservice.service';

describe('MemberserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MemberserviceService]
    });
  });

  it('should ...', inject([MemberserviceService], (service: MemberserviceService) => {
    expect(service).toBeTruthy();
  }));
});
