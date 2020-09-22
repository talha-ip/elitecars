import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistOnePage } from './wishlist-one.page';

describe('WishlistOnePage', () => {
  let component: WishlistOnePage;
  let fixture: ComponentFixture<WishlistOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishlistOnePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
