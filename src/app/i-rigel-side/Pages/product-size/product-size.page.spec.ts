import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSizePage } from './product-size.page';

describe('ProductSizePage', () => {
  let component: ProductSizePage;
  let fixture: ComponentFixture<ProductSizePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSizePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSizePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
