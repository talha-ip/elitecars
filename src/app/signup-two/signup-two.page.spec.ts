import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupTwoPage } from './signup-two.page';

describe('SignupTwoPage', () => {
  let component: SignupTwoPage;
  let fixture: ComponentFixture<SignupTwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupTwoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
