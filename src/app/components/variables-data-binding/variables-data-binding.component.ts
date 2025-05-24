import { Component } from '@angular/core';

@Component({
  selector: 'app-variables-data-binding',
  imports: [],
  templateUrl: './variables-data-binding.component.html',
  styleUrl: './variables-data-binding.component.css'
})
export class VariablesDataBindingComponent {
  variableString: string = "Esta es la variable";
}
