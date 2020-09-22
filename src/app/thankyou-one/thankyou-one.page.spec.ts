import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankyouOnePage } from './thankyou-one.page';

describe('ThankyouOnePage', () => {
  let component: ThankyouOnePage;
  let fixture: ComponentFixture<ThankyouOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThankyouOnePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankyouOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
