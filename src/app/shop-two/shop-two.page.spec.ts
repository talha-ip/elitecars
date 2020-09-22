import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopTwoPage } from './shop-two.page';

describe('ShopTwoPage', () => {
  let component: ShopTwoPage;
  let fixture: ComponentFixture<ShopTwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopTwoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
