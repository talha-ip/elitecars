import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsIntegrationPage } from './analytics-integration.page';

describe('AnalyticsIntegrationPage', () => {
  let component: AnalyticsIntegrationPage;
  let fixture: ComponentFixture<AnalyticsIntegrationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyticsIntegrationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsIntegrationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
