import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartFivePage } from './cart-five.page';

describe('CartFivePage', () => {
  let component: CartFivePage;
  let fixture: ComponentFixture<CartFivePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartFivePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartFivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
