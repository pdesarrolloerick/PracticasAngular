import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForListasObjetosComponent } from './for-listas-objetos.component';

describe('ForListasObjetosComponent', () => {
  let component: ForListasObjetosComponent;
  let fixture: ComponentFixture<ForListasObjetosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForListasObjetosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForListasObjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
