import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetElevenPage } from './forget-eleven.page';

describe('ForgetElevenPage', () => {
  let component: ForgetElevenPage;
  let fixture: ComponentFixture<ForgetElevenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgetElevenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetElevenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
