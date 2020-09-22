import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroFourPage } from './intro-four.page';

describe('IntroFourPage', () => {
  let component: IntroFourPage;
  let fixture: ComponentFixture<IntroFourPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroFourPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroFourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
