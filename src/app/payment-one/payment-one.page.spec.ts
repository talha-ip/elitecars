import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentOnePage } from './payment-one.page';

describe('PaymentOnePage', () => {
  let component: PaymentOnePage;
  let fixture: ComponentFixture<PaymentOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentOnePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
