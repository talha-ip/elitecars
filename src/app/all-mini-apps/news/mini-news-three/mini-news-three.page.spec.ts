import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniNewsThreePage } from './mini-news-three.page';

describe('MiniNewsThreePage', () => {
  let component: MiniNewsThreePage;
  let fixture: ComponentFixture<MiniNewsThreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniNewsThreePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniNewsThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
