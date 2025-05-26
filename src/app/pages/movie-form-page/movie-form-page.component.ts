import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ReactiveFormsComponent } from '../../components/reactive-forms/reactive-forms.component';

@Component({
  selector: 'app-movie-form-page',
  imports: [HeaderComponent, ReactiveFormsComponent],
  templateUrl: './movie-form-page.component.html',
  styleUrl: './movie-form-page.component.css'
})
export class MovieFormPageComponent {

}
