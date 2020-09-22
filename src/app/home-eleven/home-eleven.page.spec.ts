import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeElevenPage } from './home-eleven.page';

describe('HomeElevenPage', () => {
  let component: HomeElevenPage;
  let fixture: ComponentFixture<HomeElevenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeElevenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeElevenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
