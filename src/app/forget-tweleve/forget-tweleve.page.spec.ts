import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetTwelevePage } from './forget-tweleve.page';

describe('ForgetTwelevePage', () => {
  let component: ForgetTwelevePage;
  let fixture: ComponentFixture<ForgetTwelevePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgetTwelevePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetTwelevePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
