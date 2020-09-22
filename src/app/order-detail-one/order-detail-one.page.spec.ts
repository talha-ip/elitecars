import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailOnePage } from './order-detail-one.page';

describe('OrderDetailOnePage', () => {
  let component: OrderDetailOnePage;
  let fixture: ComponentFixture<OrderDetailOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDetailOnePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
