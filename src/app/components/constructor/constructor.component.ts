import { Component } from '@angular/core';

@Component({
  selector: 'app-constructor',
  imports: [],
  templateUrl: './constructor.component.html',
  styleUrl: './constructor.component.css'
})
export class ConstructorComponent {
  userNameErick: string;

  //* El metodo constructor() es el primer metodo que se ejecuta cuando se cree esta clase

  //todo: Todas las variables o metodos que se llamen dentro de una clase
  //todo: Deben llamarse con this.NombreVariable o this.NombreMetodo()

  constructor(){
    this.userNameErick = "Erick"; // Haciendo uso de la variable
  }
}
