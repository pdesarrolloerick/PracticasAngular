import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForRenderizadoListasComponent } from './for-renderizado-listas.component';

describe('ForRenderizadoListasComponent', () => {
  let component: ForRenderizadoListasComponent;
  let fixture: ComponentFixture<ForRenderizadoListasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForRenderizadoListasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForRenderizadoListasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
