import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginThirteenPage } from './login-thirteen.page';

describe('LoginThirteenPage', () => {
  let component: LoginThirteenPage;
  let fixture: ComponentFixture<LoginThirteenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginThirteenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginThirteenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
