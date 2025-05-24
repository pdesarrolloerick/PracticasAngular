import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  imports: [],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css'
})
export class EventosComponent {
  // Creacion de variable
  number: number = 0;

  // Creacion de metodo para aumentar en 1 la variable - es un metodo porque esta dentro de una clase
  aumentarPorClick(){
    // Se debe usar this.nombreVariable para llamar la variable en un metodo
    this.number++;
  }
}
