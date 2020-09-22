import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterThirteenPage } from './register-thirteen.page';

describe('RegisterThirteenPage', () => {
  let component: RegisterThirteenPage;
  let fixture: ComponentFixture<RegisterThirteenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterThirteenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterThirteenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
