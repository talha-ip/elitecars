import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentIntegrationPage } from './payment-integration.page';

describe('PaymentIntegrationPage', () => {
  let component: PaymentIntegrationPage;
  let fixture: ComponentFixture<PaymentIntegrationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentIntegrationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentIntegrationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
