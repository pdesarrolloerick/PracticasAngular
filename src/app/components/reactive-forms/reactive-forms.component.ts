import { Component } from '@angular/core';
//! Se debe importar ReactiveFormsModule, FormGrop, FormControl
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'; 
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule,], 
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {
  movieForm: FormGroup;
  name: FormControl;
  duration: FormControl;
  director: FormControl;

  constructor(public movieService: MovieService){
    this.name = new FormControl('', Validators.required);
    this.duration = new FormControl('', [
      Validators.required, 
      Validators.max(300)
    ]);
    this.director = new FormControl('');

    this.movieForm = new FormGroup({
      name: this.name,
      duration: this.duration,
      direction: this.director,
    });
  }
  handleSubmit(): void {
      console.log("Movie created: ", this.movieForm.value);
      this.movieService.addMovie(this.movieForm.value);
      this.movieForm.reset();
  }
}
