import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusEightPage } from './aboutus-eight.page';

describe('AboutusEightPage', () => {
  let component: AboutusEightPage;
  let fixture: ComponentFixture<AboutusEightPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutusEightPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutusEightPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
