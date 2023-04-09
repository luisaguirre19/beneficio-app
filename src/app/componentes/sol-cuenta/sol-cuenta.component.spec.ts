import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolCuentaComponent } from './sol-cuenta.component';

describe('SolCuentaComponent', () => {
  let component: SolCuentaComponent;
  let fixture: ComponentFixture<SolCuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolCuentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
