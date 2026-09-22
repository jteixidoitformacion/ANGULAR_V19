import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardIntegradorComponent } from './dashboard-integrador.component';

describe('DashboardIntegradorComponent', () => {
  let component: DashboardIntegradorComponent;
  let fixture: ComponentFixture<DashboardIntegradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardIntegradorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardIntegradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
