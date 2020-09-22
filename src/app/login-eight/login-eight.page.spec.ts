import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginEightPage } from './login-eight.page';

describe('LoginEightPage', () => {
  let component: LoginEightPage;
  let fixture: ComponentFixture<LoginEightPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginEightPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginEightPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
