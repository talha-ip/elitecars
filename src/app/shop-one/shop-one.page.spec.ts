import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopOnePage } from './shop-one.page';

describe('ShopOnePage', () => {
  let component: ShopOnePage;
  let fixture: ComponentFixture<ShopOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopOnePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
