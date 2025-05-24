import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Para el DoubleDataBinding - ngModel

@Component({
  selector: 'app-double-data-binding',
  imports: [FormsModule],
  templateUrl: './double-data-binding.component.html',
  styleUrl: './double-data-binding.component.css'
})
export class DoubleDataBindingComponent {
  ejemploDoubleDataBinding: string = "texto";
}
