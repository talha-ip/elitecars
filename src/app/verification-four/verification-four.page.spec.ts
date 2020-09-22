import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationFourPage } from './verification-four.page';

describe('VerificationFourPage', () => {
  let component: VerificationFourPage;
  let fixture: ComponentFixture<VerificationFourPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificationFourPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificationFourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
