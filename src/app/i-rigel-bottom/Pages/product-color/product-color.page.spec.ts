import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductColorPage } from './product-color.page';

describe('ProductColorPage', () => {
  let component: ProductColorPage;
  let fixture: ComponentFixture<ProductColorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductColorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductColorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
