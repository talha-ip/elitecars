import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginNinePage } from './login-nine.page';

describe('LoginNinePage', () => {
  let component: LoginNinePage;
  let fixture: ComponentFixture<LoginNinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginNinePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginNinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
