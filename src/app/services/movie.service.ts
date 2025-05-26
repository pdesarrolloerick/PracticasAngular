import { Injectable } from '@angular/core';
import Peliculas from '../models/Peliculas';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  arrayPeliculas: Peliculas[];

  constructor() { 
    this.arrayPeliculas = [
      {
        name: "Interstellar",
        duration: 2,
        director: "Christopher Nolan",
      },
      {
        name: "Contact",
        duration: 2,
        director: "Denis Villeneuve",
      },
    ]
  }

  addMovie(movie: Peliculas){
    this.arrayPeliculas.push(movie);
  }

  getMovie(name: string): Peliculas | undefined {
    return this.arrayPeliculas.find((arrayPeliculas)=> arrayPeliculas.name === name);
  } 
}
