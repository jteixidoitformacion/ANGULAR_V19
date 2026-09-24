import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerLogsComponent } from './manager-logs.component';

describe('ManagerLogsComponent', () => {
  let component: ManagerLogsComponent;
  let fixture: ComponentFixture<ManagerLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagerLogsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
