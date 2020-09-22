import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationNinePage } from './verification-nine.page';

describe('VerificationNinePage', () => {
  let component: VerificationNinePage;
  let fixture: ComponentFixture<VerificationNinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificationNinePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificationNinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
