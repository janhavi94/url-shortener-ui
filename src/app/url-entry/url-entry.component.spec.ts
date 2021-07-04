import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlEntryComponent } from './url-entry.component';

describe('UrlEntryComponent', () => {
  let component: UrlEntryComponent;
  let fixture: ComponentFixture<UrlEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrlEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
