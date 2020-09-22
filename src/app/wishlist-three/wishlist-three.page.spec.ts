import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistThreePage } from './wishlist-three.page';

describe('WishlistThreePage', () => {
  let component: WishlistThreePage;
  let fixture: ComponentFixture<WishlistThreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishlistThreePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
