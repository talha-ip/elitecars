import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusTenPage } from './aboutus-ten.page';

describe('AboutusTenPage', () => {
  let component: AboutusTenPage;
  let fixture: ComponentFixture<AboutusTenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutusTenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutusTenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
