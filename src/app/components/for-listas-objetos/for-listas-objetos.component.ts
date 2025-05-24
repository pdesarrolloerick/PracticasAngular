import { Component } from '@angular/core';

interface Persona {
  id: number,
  nombre: string,
  cedula: number,
}

@Component({
  selector: 'app-for-listas-objetos',
  imports: [],
  templateUrl: './for-listas-objetos.component.html',
  styleUrl: './for-listas-objetos.component.css'
})
export class ForListasObjetosComponent {
  personaUno: Persona[] = [
    {
      id: 1,
      nombre: "Erick",
      cedula: 27419886,
    },
    {
      id: 2,
      nombre: "Usuario2",
      cedula: 123213,
    },
    {
      id: 3,
      nombre: "Usuario3",
      cedula: 4343535,
    }
  ]
}
