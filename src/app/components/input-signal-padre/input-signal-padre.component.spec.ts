import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSignalPadreComponent } from './input-signal-padre.component';

describe('InputSignalPadreComponent', () => {
  let component: InputSignalPadreComponent;
  let fixture: ComponentFixture<InputSignalPadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputSignalPadreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputSignalPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
