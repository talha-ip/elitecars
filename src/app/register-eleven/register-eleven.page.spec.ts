import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterElevenPage } from './register-eleven.page';

describe('RegisterElevenPage', () => {
  let component: RegisterElevenPage;
  let fixture: ComponentFixture<RegisterElevenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterElevenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterElevenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
