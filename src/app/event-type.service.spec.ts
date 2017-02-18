/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EventTypeService } from './event-type.service';

describe('EventTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventTypeService]
    });
  });

  it('should ...', inject([EventTypeService], (service: EventTypeService) => {
    expect(service).toBeTruthy();
  }));
});
