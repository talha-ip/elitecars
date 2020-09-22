import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusSevenPage } from './aboutus-seven.page';

describe('AboutusSevenPage', () => {
  let component: AboutusSevenPage;
  let fixture: ComponentFixture<AboutusSevenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutusSevenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutusSevenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
