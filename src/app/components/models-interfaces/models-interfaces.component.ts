  import { Component } from '@angular/core';
import Products from '../../models/Product'; //! Aca se importa el modelo 

@Component({
  selector: 'app-models-interfaces',
  imports: [],
  templateUrl: './models-interfaces.component.html',
  styleUrl: './models-interfaces.component.css'
})
export class ModelsInterfacesComponent {
  //* Para usar modelos lo mas practico es crear una carpeta Models en src/app/models
  //* Y crear todos los modelos interfaces desde alli

  userName: string;
  myNumber: number;
  myBoolean: boolean;
  producto: Products; // Aca se debe importar 

  constructor(){
    this.userName = "Erick";
    this.myNumber = 25;
    this.myBoolean = true;
    this.producto = {    // Se utiliza la interfaz- modelo creada en carpeta src/app/models
      name: "Teclado",
      price: 300,
      isForSale: true,
    }
  }
}
