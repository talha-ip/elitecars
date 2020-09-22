import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetTenPage } from './forget-ten.page';

describe('ForgetTenPage', () => {
  let component: ForgetTenPage;
  let fixture: ComponentFixture<ForgetTenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgetTenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetTenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
