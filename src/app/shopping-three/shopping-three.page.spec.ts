import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingThreePage } from './shopping-three.page';

describe('ShoppingThreePage', () => {
  let component: ShoppingThreePage;
  let fixture: ComponentFixture<ShoppingThreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingThreePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
