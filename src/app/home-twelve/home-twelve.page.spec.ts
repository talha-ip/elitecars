import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTwelvePage } from './home-twelve.page';

describe('HomeTwelvePage', () => {
  let component: HomeTwelvePage;
  let fixture: ComponentFixture<HomeTwelvePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTwelvePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTwelvePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
