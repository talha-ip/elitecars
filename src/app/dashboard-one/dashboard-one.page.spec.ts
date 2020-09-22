import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOnePage } from './dashboard-one.page';

describe('DashboardOnePage', () => {
  let component: DashboardOnePage;
  let fixture: ComponentFixture<DashboardOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardOnePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
