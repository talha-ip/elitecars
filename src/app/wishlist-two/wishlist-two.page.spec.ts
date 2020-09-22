import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistTwoPage } from './wishlist-two.page';

describe('WishlistTwoPage', () => {
  let component: WishlistTwoPage;
  let fixture: ComponentFixture<WishlistTwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishlistTwoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
