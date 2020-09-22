import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropboxIntegrationnPage } from './dropbox-integrationn.page';

describe('DropboxIntegrationnPage', () => {
  let component: DropboxIntegrationnPage;
  let fixture: ComponentFixture<DropboxIntegrationnPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropboxIntegrationnPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropboxIntegrationnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
