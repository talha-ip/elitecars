import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartSevenPage } from './cart-seven.page';

describe('CartSevenPage', () => {
  let component: CartSevenPage;
  let fixture: ComponentFixture<CartSevenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartSevenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartSevenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
