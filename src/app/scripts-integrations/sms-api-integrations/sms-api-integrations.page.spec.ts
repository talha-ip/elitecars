import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsApiIntegrationsPage } from './sms-api-integrations.page';

describe('SmsApiIntegrationsPage', () => {
  let component: SmsApiIntegrationsPage;
  let fixture: ComponentFixture<SmsApiIntegrationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsApiIntegrationsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsApiIntegrationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
