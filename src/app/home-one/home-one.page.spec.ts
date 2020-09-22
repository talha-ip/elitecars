import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOnePage } from './home-one.page';

describe('HomeOnePage', () => {
  let component: HomeOnePage;
  let fixture: ComponentFixture<HomeOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeOnePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
