import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariablesDataBindingComponent } from './variables-data-binding.component';

describe('VariablesDataBindingComponent', () => {
  let component: VariablesDataBindingComponent;
  let fixture: ComponentFixture<VariablesDataBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VariablesDataBindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VariablesDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
