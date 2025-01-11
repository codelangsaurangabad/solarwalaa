import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DCWireComponent } from './dc-wire.component';

describe('DCWireComponent', () => {
  let component: DCWireComponent;
  let fixture: ComponentFixture<DCWireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DCWireComponent]
    });
    fixture = TestBed.createComponent(DCWireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
