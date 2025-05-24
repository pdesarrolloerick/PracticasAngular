import { Component } from '@angular/core';
import { InputSignalChildComponent } from '../input-signal-child/input-signal-child.component';

@Component({
  selector: 'app-input-signal-padre',
  imports: [InputSignalChildComponent],
  templateUrl: './input-signal-padre.component.html',
  styleUrl: './input-signal-padre.component.css'
})
export class InputSignalPadreComponent {
  variablePadre: string = "Informacion enviada";
}
