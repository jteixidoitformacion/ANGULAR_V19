import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrerLogComponent } from './registrer-log.component';

describe('RegistrerLogComponent', () => {
  let component: RegistrerLogComponent;
  let fixture: ComponentFixture<RegistrerLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrerLogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrerLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
