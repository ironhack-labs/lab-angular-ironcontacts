import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatteArtComponent } from './latte-art.component';

describe('LatteArtComponent', () => {
  let component: LatteArtComponent;
  let fixture: ComponentFixture<LatteArtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatteArtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatteArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
