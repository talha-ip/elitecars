import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniNewsOnePage } from './mini-news-one.page';

describe('MiniNewsOnePage', () => {
  let component: MiniNewsOnePage;
  let fixture: ComponentFixture<MiniNewsOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniNewsOnePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniNewsOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
