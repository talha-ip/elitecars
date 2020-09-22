import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFourteenPage } from './login-fourteen.page';

describe('LoginFourteenPage', () => {
  let component: LoginFourteenPage;
  let fixture: ComponentFixture<LoginFourteenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginFourteenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFourteenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
