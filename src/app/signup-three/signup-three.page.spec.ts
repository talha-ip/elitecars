import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupThreePage } from './signup-three.page';

describe('SignupThreePage', () => {
  let component: SignupThreePage;
  let fixture: ComponentFixture<SignupThreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupThreePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
