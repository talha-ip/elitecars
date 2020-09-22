import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterEightPage } from './register-eight.page';

describe('RegisterEightPage', () => {
  let component: RegisterEightPage;
  let fixture: ComponentFixture<RegisterEightPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterEightPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterEightPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
