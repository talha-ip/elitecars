import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesOnePage } from './categories-one.page';

describe('CategoriesOnePage', () => {
  let component: CategoriesOnePage;
  let fixture: ComponentFixture<CategoriesOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesOnePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
