import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationSixPage } from './verification-six.page';

describe('VerificationSixPage', () => {
  let component: VerificationSixPage;
  let fixture: ComponentFixture<VerificationSixPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificationSixPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificationSixPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
