import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEightPage } from './home-eight.page';

describe('HomeEightPage', () => {
  let component: HomeEightPage;
  let fixture: ComponentFixture<HomeEightPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeEightPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEightPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
