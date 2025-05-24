//! De igual manera que con los @Input, en los @Output tambien se deben importar
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output-child',
  imports: [],
  templateUrl: './output-child.component.html',
  styleUrl: './output-child.component.css'
})
export class OutputChildComponent {
  // El output es lo contrario del input
  // Funciona para enviar informacion desde el componente hijo hacia el componente padre de eventos

  //* Para hacerlo lo unico que tenemos que hacer es crear un evento haciendo uso del decorador @Output

  @Output() // Luego de escribir el decorador @Output debajo le damos el nombre al evento
            // Que se piensa emitir se le añade EventEmitter y se inicializa
            // nombreEvento: EventEmitter<TipoDeDatoAemitir> = new EventEmitter<any> 
            // El EEventmitter tambien se tiene que importar
  login: EventEmitter<any> = new EventEmitter<any>;

  userName: string = "Erick";

  // Luego creamos un metodo que cuando se ejecute emita el evento que se creo anteriormente
  handleLogin(){
    // Se usa el objeto login con su metodo emit(this.informacionAenviar)
    this.login.emit(this.userName);
  }

  // Lo siguiente es colocar un evento en click en el boton en el html

  // Y luego se debe crear una funcion que recoja la informacion en el componente padre
}
