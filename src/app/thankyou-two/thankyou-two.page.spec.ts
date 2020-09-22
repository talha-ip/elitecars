import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankyouTwoPage } from './thankyou-two.page';

describe('ThankyouTwoPage', () => {
  let component: ThankyouTwoPage;
  let fixture: ComponentFixture<ThankyouTwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThankyouTwoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankyouTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
