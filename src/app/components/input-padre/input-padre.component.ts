import { Component } from '@angular/core';
import { InputChildComponent } from '../input-child/input-child.component';

@Component({
  selector: 'app-input-padre',
  // Igualmente se debe importar el componente hijo en el componente padre
  imports: [InputChildComponent],
  templateUrl: './input-padre.component.html',
  styleUrl: './input-padre.component.css'
})
export class InputPadreComponent {
  // El decorador @Input permite migrar informacion de componente padre a un componente hijo

  // Esta variable se va a crear para enviarla hacia el componente hijo
  variablePrueba: string = "Variable enviada desde el componente padre";

  // Este objeto tambien lo enviaremos al componente hijo
  objetoPrueba: any = {
    id: 1,
    fruta: "Manzana",
    existencia: true,
  }
}
