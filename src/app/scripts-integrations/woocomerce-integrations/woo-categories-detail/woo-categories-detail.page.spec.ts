import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WooCategoriesDetailPage } from './woo-categories-detail.page';

describe('WooCategoriesDetailPage', () => {
  let component: WooCategoriesDetailPage;
  let fixture: ComponentFixture<WooCategoriesDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WooCategoriesDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WooCategoriesDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
