import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RazorpayMethodPage } from './razorpay-method.page';

describe('RazorpayMethodPage', () => {
  let component: RazorpayMethodPage;
  let fixture: ComponentFixture<RazorpayMethodPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RazorpayMethodPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RazorpayMethodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
