import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PushNotificationIntegrationsPage } from './push-notification-integrations.page';

describe('PushNotificationIntegrationsPage', () => {
  let component: PushNotificationIntegrationsPage;
  let fixture: ComponentFixture<PushNotificationIntegrationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PushNotificationIntegrationsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PushNotificationIntegrationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
