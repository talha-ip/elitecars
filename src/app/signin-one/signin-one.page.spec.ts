import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninOnePage } from './signin-one.page';

describe('SigninOnePage', () => {
  let component: SigninOnePage;
  let fixture: ComponentFixture<SigninOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninOnePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
