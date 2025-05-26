import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-list',
  imports: [HeaderComponent],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  constructor(public movieListService: MovieService){

  }
}
