import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetSevenPage } from './forget-seven.page';

describe('ForgetSevenPage', () => {
  let component: ForgetSevenPage;
  let fixture: ComponentFixture<ForgetSevenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgetSevenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetSevenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
