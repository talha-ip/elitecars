import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroTwoPage } from './intro-two.page';

describe('IntroTwoPage', () => {
  let component: IntroTwoPage;
  let fixture: ComponentFixture<IntroTwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroTwoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
