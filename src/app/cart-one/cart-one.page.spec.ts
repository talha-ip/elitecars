import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartOnePage } from './cart-one.page';

describe('CartOnePage', () => {
  let component: CartOnePage;
  let fixture: ComponentFixture<CartOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartOnePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
