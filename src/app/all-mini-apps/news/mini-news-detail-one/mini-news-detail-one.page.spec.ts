import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniNewsDetailOnePage } from './mini-news-detail-one.page';

describe('MiniNewsDetailOnePage', () => {
  let component: MiniNewsDetailOnePage;
  let fixture: ComponentFixture<MiniNewsDetailOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniNewsDetailOnePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniNewsDetailOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
