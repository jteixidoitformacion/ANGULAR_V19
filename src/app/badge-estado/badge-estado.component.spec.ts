import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeEstadoComponent } from './badge-estado.component';

describe('BadgeEstadoComponent', () => {
  let component: BadgeEstadoComponent;
  let fixture: ComponentFixture<BadgeEstadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadgeEstadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadgeEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
