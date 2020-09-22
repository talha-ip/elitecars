import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusOnePage } from './aboutus-one.page';

describe('AboutusOnePage', () => {
  let component: AboutusOnePage;
  let fixture: ComponentFixture<AboutusOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutusOnePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutusOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
