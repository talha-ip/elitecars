import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninThreePage } from './signin-three.page';

describe('SigninThreePage', () => {
  let component: SigninThreePage;
  let fixture: ComponentFixture<SigninThreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninThreePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
