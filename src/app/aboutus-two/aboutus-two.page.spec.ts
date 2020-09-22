import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusTwoPage } from './aboutus-two.page';

describe('AboutusTwoPage', () => {
  let component: AboutusTwoPage;
  let fixture: ComponentFixture<AboutusTwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutusTwoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutusTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
