import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetFourteenPage } from './forget-fourteen.page';

describe('ForgetFourteenPage', () => {
  let component: ForgetFourteenPage;
  let fixture: ComponentFixture<ForgetFourteenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgetFourteenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetFourteenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
