import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesThreePage } from './categories-three.page';

describe('CategoriesThreePage', () => {
  let component: CategoriesThreePage;
  let fixture: ComponentFixture<CategoriesThreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesThreePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
