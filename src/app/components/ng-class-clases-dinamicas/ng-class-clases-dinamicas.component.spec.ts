import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgClassClasesDinamicasComponent } from './ng-class-clases-dinamicas.component';

describe('NgClassClasesDinamicasComponent', () => {
  let component: NgClassClasesDinamicasComponent;
  let fixture: ComponentFixture<NgClassClasesDinamicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgClassClasesDinamicasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgClassClasesDinamicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
