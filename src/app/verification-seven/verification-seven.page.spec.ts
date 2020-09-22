import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationSevenPage } from './verification-seven.page';

describe('VerificationSevenPage', () => {
  let component: VerificationSevenPage;
  let fixture: ComponentFixture<VerificationSevenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificationSevenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificationSevenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
