/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EventreportComponent } from './eventreport.component';

describe('EventreportComponent', () => {
  let component: EventreportComponent;
  let fixture: ComponentFixture<EventreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
