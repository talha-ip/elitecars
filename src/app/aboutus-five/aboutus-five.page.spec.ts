import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusFivePage } from './aboutus-five.page';

describe('AboutusFivePage', () => {
  let component: AboutusFivePage;
  let fixture: ComponentFixture<AboutusFivePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutusFivePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutusFivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
