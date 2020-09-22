import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StripeMethodPage } from './stripe-method.page';

describe('StripeMethodPage', () => {
  let component: StripeMethodPage;
  let fixture: ComponentFixture<StripeMethodPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StripeMethodPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StripeMethodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
