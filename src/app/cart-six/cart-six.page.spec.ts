import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartSixPage } from './cart-six.page';

describe('CartSixPage', () => {
  let component: CartSixPage;
  let fixture: ComponentFixture<CartSixPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartSixPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartSixPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
