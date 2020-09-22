import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSixPage } from './home-six.page';

describe('HomeSixPage', () => {
  let component: HomeSixPage;
  let fixture: ComponentFixture<HomeSixPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSixPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSixPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
