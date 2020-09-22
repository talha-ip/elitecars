import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniNewsDetailThreePage } from './mini-news-detail-three.page';

describe('MiniNewsDetailThreePage', () => {
  let component: MiniNewsDetailThreePage;
  let fixture: ComponentFixture<MiniNewsDetailThreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniNewsDetailThreePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniNewsDetailThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
