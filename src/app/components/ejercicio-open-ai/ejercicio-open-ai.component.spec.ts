import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioOpenAIComponent } from './ejercicio-open-ai.component';

describe('EjercicioOpenAIComponent', () => {
  let component: EjercicioOpenAIComponent;
  let fixture: ComponentFixture<EjercicioOpenAIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjercicioOpenAIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjercicioOpenAIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
