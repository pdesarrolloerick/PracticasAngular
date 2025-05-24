import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPadreComponent } from './input-padre.component';

describe('InputPadreComponent', () => {
  let component: InputPadreComponent;
  let fixture: ComponentFixture<InputPadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputPadreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
