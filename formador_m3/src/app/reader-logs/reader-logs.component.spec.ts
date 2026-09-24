import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaderLogsComponent } from './reader-logs.component';

describe('ReaderLogsComponent', () => {
  let component: ReaderLogsComponent;
  let fixture: ComponentFixture<ReaderLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReaderLogsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReaderLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
