import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusNinePage } from './aboutus-nine.page';

describe('AboutusNinePage', () => {
  let component: AboutusNinePage;
  let fixture: ComponentFixture<AboutusNinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutusNinePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutusNinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
