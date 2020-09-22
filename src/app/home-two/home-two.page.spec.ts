import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTwoPage } from './home-two.page';

describe('HomeTwoPage', () => {
  let component: HomeTwoPage;
  let fixture: ComponentFixture<HomeTwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTwoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
