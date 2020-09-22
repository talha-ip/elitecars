import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusFourPage } from './aboutus-four.page';

describe('AboutusFourPage', () => {
  let component: AboutusFourPage;
  let fixture: ComponentFixture<AboutusFourPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutusFourPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutusFourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
