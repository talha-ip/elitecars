import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFivePage } from './home-five.page';

describe('HomeFivePage', () => {
  let component: HomeFivePage;
  let fixture: ComponentFixture<HomeFivePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeFivePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
