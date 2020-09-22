import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaypalMethodPage } from './paypal-method.page';

describe('PaypalMethodPage', () => {
  let component: PaypalMethodPage;
  let fixture: ComponentFixture<PaypalMethodPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaypalMethodPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaypalMethodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
