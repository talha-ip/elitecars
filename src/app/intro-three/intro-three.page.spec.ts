import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroThreePage } from './intro-three.page';

describe('IntroThreePage', () => {
  let component: IntroThreePage;
  let fixture: ComponentFixture<IntroThreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroThreePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
