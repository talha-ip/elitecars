import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationThreePage } from './verification-three.page';

describe('VerificationThreePage', () => {
  let component: VerificationThreePage;
  let fixture: ComponentFixture<VerificationThreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificationThreePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificationThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
