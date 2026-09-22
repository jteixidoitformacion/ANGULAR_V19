import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfMonitorComponent } from './perf-monitor.component';

describe('PerfMonitorComponent', () => {
  let component: PerfMonitorComponent;
  let fixture: ComponentFixture<PerfMonitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfMonitorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
