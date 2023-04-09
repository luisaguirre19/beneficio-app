import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolInscripcionComponent } from './sol-inscripcion.component';

describe('SolInscripcionComponent', () => {
  let component: SolInscripcionComponent;
  let fixture: ComponentFixture<SolInscripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolInscripcionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolInscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
