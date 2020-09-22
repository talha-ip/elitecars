import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniNewsTwoPage } from './mini-news-two.page';

describe('MiniNewsTwoPage', () => {
  let component: MiniNewsTwoPage;
  let fixture: ComponentFixture<MiniNewsTwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniNewsTwoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniNewsTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
