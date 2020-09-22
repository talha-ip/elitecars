import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsThreePage } from './news-three.page';

describe('NewsThreePage', () => {
  let component: NewsThreePage;
  let fixture: ComponentFixture<NewsThreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsThreePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
