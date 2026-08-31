import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tawseela } from './tawseela';

describe('Tawseela', () => {
  let component: Tawseela;
  let fixture: ComponentFixture<Tawseela>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tawseela]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tawseela);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
