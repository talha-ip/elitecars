import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetNinePage } from './forget-nine.page';

describe('ForgetNinePage', () => {
  let component: ForgetNinePage;
  let fixture: ComponentFixture<ForgetNinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgetNinePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetNinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
