import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleDataBindingComponent } from './double-data-binding.component';

describe('DoubleDataBindingComponent', () => {
  let component: DoubleDataBindingComponent;
  let fixture: ComponentFixture<DoubleDataBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoubleDataBindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoubleDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
