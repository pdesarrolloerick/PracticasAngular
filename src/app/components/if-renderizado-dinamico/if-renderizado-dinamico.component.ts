import { Component } from '@angular/core';

@Component({
  selector: 'app-if-renderizado-dinamico',
  imports: [],
  templateUrl: './if-renderizado-dinamico.component.html',
  styleUrl: './if-renderizado-dinamico.component.css'
})
export class IfRenderizadoDinamicoComponent {
  variableTrue: boolean = false;
  otraCondicion: string = "";
}
