import { Component } from '@angular/core';
import { Child1Component } from '../child-1/child-1.component';
import { Child2Component } from '../child-2/child-2.component';

@Component({
  selector: 'app-padre',
  imports: [Child1Component, Child2Component],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {
  // Los servicios son ficheros typescript donde se pueden almacenar propiedades y metodos
  // Variables y funciones a las que podremos acceder desde cualquier componente
}
