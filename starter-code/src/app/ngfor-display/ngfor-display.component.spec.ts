import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgforDisplayComponent } from './ngfor-display.component';

describe('NgforDisplayComponent', () => {
  let component: NgforDisplayComponent;
  let fixture: ComponentFixture<NgforDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgforDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgforDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
