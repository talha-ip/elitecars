import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineOnePage } from './timeline-one.page';

describe('TimelineOnePage', () => {
  let component: TimelineOnePage;
  let fixture: ComponentFixture<TimelineOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineOnePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
