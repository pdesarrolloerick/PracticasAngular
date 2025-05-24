import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { VariablesDataBindingComponent } from './components/variables-data-binding/variables-data-binding.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { DoubleDataBindingComponent } from './components/double-data-binding/double-data-binding.component';
import { IfRenderizadoDinamicoComponent } from './components/if-renderizado-dinamico/if-renderizado-dinamico.component';
import { ForRenderizadoListasComponent } from './components/for-renderizado-listas/for-renderizado-listas.component';
import { ForListasObjetosComponent } from './components/for-listas-objetos/for-listas-objetos.component';
import { InputPadreComponent } from './components/input-padre/input-padre.component';
import { InputSignalPadreComponent } from './components/input-signal-padre/input-signal-padre.component';
import { OutputPadreComponent } from './components/output-padre/output-padre.component';
import { ModelsInterfacesComponent } from './components/models-interfaces/models-interfaces.component';
import { ConstructorComponent } from './components/constructor/constructor.component';
import { NgClassClasesDinamicasComponent } from './components/ng-class-clases-dinamicas/ng-class-clases-dinamicas.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { PadreComponent } from './components/padre/padre.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent,
            VariablesDataBindingComponent,
            EventosComponent, DoubleDataBindingComponent,
            IfRenderizadoDinamicoComponent, 
            ForRenderizadoListasComponent,
            ForListasObjetosComponent, InputPadreComponent, 
            InputSignalPadreComponent, OutputPadreComponent,
            ModelsInterfacesComponent, ConstructorComponent,
            NgClassClasesDinamicasComponent, ReactiveFormsComponent,
            PadreComponent,
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'curso_Angular';
}
