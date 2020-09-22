import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WoocomercePage } from './woocomerce.page';

describe('WoocomercePage', () => {
  let component: WoocomercePage;
  let fixture: ComponentFixture<WoocomercePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WoocomercePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WoocomercePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
