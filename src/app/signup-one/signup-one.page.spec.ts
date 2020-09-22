import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupOnePage } from './signup-one.page';

describe('SignupOnePage', () => {
  let component: SignupOnePage;
  let fixture: ComponentFixture<SignupOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupOnePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
