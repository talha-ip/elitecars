import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeModelPage } from './home-model.page';

describe('HomeModelPage', () => {
  let component: HomeModelPage;
  let fixture: ComponentFixture<HomeModelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeModelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeModelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
