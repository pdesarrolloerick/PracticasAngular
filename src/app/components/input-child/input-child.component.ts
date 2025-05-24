//! PRIMERO DEBES IMPORTAR LA FUNCION INPUT aca abajo: v 
import { Component, Input } from '@angular/core'; // Aca esta importado el Input

@Component({
  selector: 'app-input-child',
  imports: [],
  templateUrl: './input-child.component.html',
  styleUrl: './input-child.component.css'
})
export class InputChildComponent {
  //TODO: El decorador @Input permite migrar informacion de componente padre a un componente hijo
  @Input()
  mensaje: string = ""; // Esta variable la puedes utilizar en el .ts del componente hijo para recibir
                        // La informacion desde el componente padre

  @Input()
  recepcionObjeto: any;

  @Input()
  prueba: number = 0;
}
