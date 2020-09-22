import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeChanelsPlaylistsPage } from './youtube-chanels-playlists.page';

describe('YoutubeChanelsPlaylistsPage', () => {
  let component: YoutubeChanelsPlaylistsPage;
  let fixture: ComponentFixture<YoutubeChanelsPlaylistsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubeChanelsPlaylistsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeChanelsPlaylistsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
