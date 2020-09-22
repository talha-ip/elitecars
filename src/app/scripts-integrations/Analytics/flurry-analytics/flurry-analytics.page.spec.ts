import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlurryAnalyticsPage } from './flurry-analytics.page';

describe('FlurryAnalyticsPage', () => {
  let component: FlurryAnalyticsPage;
  let fixture: ComponentFixture<FlurryAnalyticsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlurryAnalyticsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlurryAnalyticsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
