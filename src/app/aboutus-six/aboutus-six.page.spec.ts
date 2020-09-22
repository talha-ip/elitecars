import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusSixPage } from './aboutus-six.page';

describe('AboutusSixPage', () => {
  let component: AboutusSixPage;
  let fixture: ComponentFixture<AboutusSixPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutusSixPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutusSixPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
