import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSevenPage } from './login-seven.page';

describe('LoginSevenPage', () => {
  let component: LoginSevenPage;
  let fixture: ComponentFixture<LoginSevenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginSevenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSevenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
