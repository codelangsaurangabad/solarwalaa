import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarDcComponent } from './solar-dc.component';

describe('SolarDcComponent', () => {
  let component: SolarDcComponent;
  let fixture: ComponentFixture<SolarDcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolarDcComponent]
    });
    fixture = TestBed.createComponent(SolarDcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
