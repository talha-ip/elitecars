import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartFourPage } from './cart-four.page';

describe('CartFourPage', () => {
  let component: CartFourPage;
  let fixture: ComponentFixture<CartFourPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartFourPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartFourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
