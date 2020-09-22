import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationFivePage } from './verification-five.page';

describe('VerificationFivePage', () => {
  let component: VerificationFivePage;
  let fixture: ComponentFixture<VerificationFivePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificationFivePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificationFivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
