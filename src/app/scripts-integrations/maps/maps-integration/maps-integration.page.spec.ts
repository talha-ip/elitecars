import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsIntegrationPage } from './maps-integration.page';

describe('MapsIntegrationPage', () => {
  let component: MapsIntegrationPage;
  let fixture: ComponentFixture<MapsIntegrationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapsIntegrationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapsIntegrationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
