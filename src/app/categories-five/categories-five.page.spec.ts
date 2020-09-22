import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesFivePage } from './categories-five.page';

describe('CategoriesFivePage', () => {
  let component: CategoriesFivePage;
  let fixture: ComponentFixture<CategoriesFivePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesFivePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesFivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
