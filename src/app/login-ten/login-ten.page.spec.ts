import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTenPage } from './login-ten.page';

describe('LoginTenPage', () => {
  let component: LoginTenPage;
  let fixture: ComponentFixture<LoginTenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginTenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginTenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
