import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSortPage } from './product-sort.page';

describe('ProductSortPage', () => {
  let component: ProductSortPage;
  let fixture: ComponentFixture<ProductSortPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSortPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSortPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
