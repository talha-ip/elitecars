import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseAnalyticsPage } from './firebase-analytics.page';

describe('FirebaseAnalyticsPage', () => {
  let component: FirebaseAnalyticsPage;
  let fixture: ComponentFixture<FirebaseAnalyticsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirebaseAnalyticsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaseAnalyticsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
