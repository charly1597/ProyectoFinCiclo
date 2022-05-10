import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaActivaComponent } from './ventana-activa.component';

describe('VentanaActivaComponent', () => {
  let component: VentanaActivaComponent;
  let fixture: ComponentFixture<VentanaActivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentanaActivaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentanaActivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
