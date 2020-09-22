import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankyouFourPage } from './thankyou-four.page';

describe('ThankyouFourPage', () => {
  let component: ThankyouFourPage;
  let fixture: ComponentFixture<ThankyouFourPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThankyouFourPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankyouFourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
