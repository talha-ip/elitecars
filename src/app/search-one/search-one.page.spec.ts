import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchOnePage } from './search-one.page';

describe('SearchOnePage', () => {
  let component: SearchOnePage;
  let fixture: ComponentFixture<SearchOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchOnePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
