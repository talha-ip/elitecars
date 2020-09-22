import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterNinePage } from './register-nine.page';

describe('RegisterNinePage', () => {
  let component: RegisterNinePage;
  let fixture: ComponentFixture<RegisterNinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterNinePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterNinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
