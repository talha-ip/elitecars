import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninTwoPage } from './signin-two.page';

describe('SigninTwoPage', () => {
  let component: SigninTwoPage;
  let fixture: ComponentFixture<SigninTwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninTwoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
