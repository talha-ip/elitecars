import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderTwoPage } from './slider-two.page';

describe('SliderTwoPage', () => {
  let component: SliderTwoPage;
  let fixture: ComponentFixture<SliderTwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderTwoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
