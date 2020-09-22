import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsTwoPage } from './news-two.page';

describe('NewsTwoPage', () => {
  let component: NewsTwoPage;
  let fixture: ComponentFixture<NewsTwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsTwoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
