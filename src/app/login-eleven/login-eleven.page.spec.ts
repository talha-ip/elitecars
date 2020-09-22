import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginElevenPage } from './login-eleven.page';

describe('LoginElevenPage', () => {
  let component: LoginElevenPage;
  let fixture: ComponentFixture<LoginElevenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginElevenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginElevenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
