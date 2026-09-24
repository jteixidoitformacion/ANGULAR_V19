import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonContadorComponent } from './boton-contador.component';

describe('BotonContadorComponent', () => {
  let component: BotonContadorComponent;
  let fixture: ComponentFixture<BotonContadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonContadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonContadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
