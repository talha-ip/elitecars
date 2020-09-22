import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationTwoPage } from './verification-two.page';

describe('VerificationTwoPage', () => {
  let component: VerificationTwoPage;
  let fixture: ComponentFixture<VerificationTwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificationTwoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificationTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
