import { Component } from '@angular/core';
import { InputChildComponent } from '../input-child/input-child.component';
import { OutputChildComponent } from '../output-child/output-child.component';

@Component({
  selector: 'app-output-padre',
  imports: [OutputChildComponent],
  templateUrl: './output-padre.component.html',
  styleUrl: './output-padre.component.css'
})
export class OutputPadreComponent {
  nombre: string = "";

  setName(event: any){
    this.nombre = event;
  }
}
