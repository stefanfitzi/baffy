/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EventeditComponent } from './eventedit.component';

describe('EventeditComponent', () => {
  let component: EventeditComponent;
  let fixture: ComponentFixture<EventeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
