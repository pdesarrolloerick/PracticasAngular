import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfRenderizadoDinamicoComponent } from './if-renderizado-dinamico.component';

describe('IfRenderizadoDinamicoComponent', () => {
  let component: IfRenderizadoDinamicoComponent;
  let fixture: ComponentFixture<IfRenderizadoDinamicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IfRenderizadoDinamicoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IfRenderizadoDinamicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
