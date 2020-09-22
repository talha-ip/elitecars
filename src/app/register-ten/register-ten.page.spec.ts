import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterTenPage } from './register-ten.page';

describe('RegisterTenPage', () => {
  let component: RegisterTenPage;
  let fixture: ComponentFixture<RegisterTenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterTenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterTenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
