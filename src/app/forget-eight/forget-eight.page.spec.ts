import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetEightPage } from './forget-eight.page';

describe('ForgetEightPage', () => {
  let component: ForgetEightPage;
  let fixture: ComponentFixture<ForgetEightPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgetEightPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetEightPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
