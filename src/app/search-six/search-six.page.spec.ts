import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSixPage } from './search-six.page';

describe('SearchSixPage', () => {
  let component: SearchSixPage;
  let fixture: ComponentFixture<SearchSixPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSixPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSixPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
