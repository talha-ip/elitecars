import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPassTwoPage } from './forgot-pass-two.page';

describe('ForgotPassTwoPage', () => {
  let component: ForgotPassTwoPage;
  let fixture: ComponentFixture<ForgotPassTwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotPassTwoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPassTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
