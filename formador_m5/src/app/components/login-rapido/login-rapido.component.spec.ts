import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRapidoComponent } from './login-rapido.component';

describe('LoginRapidoComponent', () => {
  let component: LoginRapidoComponent;
  let fixture: ComponentFixture<LoginRapidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginRapidoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginRapidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
