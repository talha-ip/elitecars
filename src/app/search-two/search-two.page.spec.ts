import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTwoPage } from './search-two.page';

describe('SearchTwoPage', () => {
  let component: SearchTwoPage;
  let fixture: ComponentFixture<SearchTwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTwoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
