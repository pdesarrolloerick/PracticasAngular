//! De igual manera tambien debe importarse el input 
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-input-signal-child',
  imports: [],
  templateUrl: './input-signal-child.component.html',
  styleUrl: './input-signal-child.component.css'
})
export class InputSignalChildComponent {
  //* Sirven para la comunicacion entre componente padre-hijo
  // Los inputs signal funcionan de la misma manera que el @Input solo que con otra sintaxis mas actual

  // Sintaxis - Se crea la variable y se la asigna un input nombreVariable = input<tipoDato>("dato")
  mensaje_inputSign = input<string>("");

}
