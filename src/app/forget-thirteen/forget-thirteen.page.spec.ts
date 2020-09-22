import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetThirteenPage } from './forget-thirteen.page';

describe('ForgetThirteenPage', () => {
  let component: ForgetThirteenPage;
  let fixture: ComponentFixture<ForgetThirteenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgetThirteenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetThirteenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
