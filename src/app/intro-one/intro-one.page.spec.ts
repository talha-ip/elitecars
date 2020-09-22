import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroOnePage } from './intro-one.page';

describe('IntroOnePage', () => {
  let component: IntroOnePage;
  let fixture: ComponentFixture<IntroOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroOnePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
