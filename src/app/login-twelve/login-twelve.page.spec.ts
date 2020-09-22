import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTwelvePage } from './login-twelve.page';

describe('LoginTwelvePage', () => {
  let component: LoginTwelvePage;
  let fixture: ComponentFixture<LoginTwelvePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginTwelvePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginTwelvePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
