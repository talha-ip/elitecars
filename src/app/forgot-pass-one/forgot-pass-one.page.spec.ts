import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPassOnePage } from './forgot-pass-one.page';

describe('ForgotPassOnePage', () => {
  let component: ForgotPassOnePage;
  let fixture: ComponentFixture<ForgotPassOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotPassOnePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPassOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
