import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BraintreeMethodPage } from './braintree-method.page';

describe('BraintreeMethodPage', () => {
  let component: BraintreeMethodPage;
  let fixture: ComponentFixture<BraintreeMethodPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BraintreeMethodPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BraintreeMethodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
