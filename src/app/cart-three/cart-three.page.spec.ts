import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartThreePage } from './cart-three.page';

describe('CartThreePage', () => {
  let component: CartThreePage;
  let fixture: ComponentFixture<CartThreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartThreePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
