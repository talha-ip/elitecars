import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailThreePage } from './order-detail-three.page';

describe('OrderDetailThreePage', () => {
  let component: OrderDetailThreePage;
  let fixture: ComponentFixture<OrderDetailThreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDetailThreePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
