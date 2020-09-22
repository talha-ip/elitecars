import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaystackMethodPage } from './paystack-method.page';

describe('PaystackMethodPage', () => {
  let component: PaystackMethodPage;
  let fixture: ComponentFixture<PaystackMethodPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaystackMethodPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaystackMethodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
