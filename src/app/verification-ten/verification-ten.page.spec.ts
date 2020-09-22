import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationTenPage } from './verification-ten.page';

describe('VerificationTenPage', () => {
  let component: VerificationTenPage;
  let fixture: ComponentFixture<VerificationTenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificationTenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificationTenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
