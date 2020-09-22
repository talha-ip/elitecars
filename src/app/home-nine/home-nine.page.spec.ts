import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNinePage } from './home-nine.page';

describe('HomeNinePage', () => {
  let component: HomeNinePage;
  let fixture: ComponentFixture<HomeNinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeNinePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
