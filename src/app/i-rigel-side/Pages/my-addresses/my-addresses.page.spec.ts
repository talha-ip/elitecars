import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAddressesPage } from './my-addresses.page';

describe('MyAddressesPage', () => {
  let component: MyAddressesPage;
  let fixture: ComponentFixture<MyAddressesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAddressesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAddressesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
