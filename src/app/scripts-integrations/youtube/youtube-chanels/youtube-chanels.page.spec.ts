import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeChanelsPage } from './youtube-chanels.page';

describe('YoutubeChanelsPage', () => {
  let component: YoutubeChanelsPage;
  let fixture: ComponentFixture<YoutubeChanelsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubeChanelsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeChanelsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
