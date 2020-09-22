import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderOnePage } from './slider-one.page';

describe('SliderOnePage', () => {
  let component: SliderOnePage;
  let fixture: ComponentFixture<SliderOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderOnePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
