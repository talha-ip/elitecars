import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetPassThreePage } from './forget-pass-three.page';

describe('ForgetPassThreePage', () => {
  let component: ForgetPassThreePage;
  let fixture: ComponentFixture<ForgetPassThreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgetPassThreePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetPassThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
