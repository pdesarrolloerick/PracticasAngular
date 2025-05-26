import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieFormPageComponent } from './pages/movie-form-page/movie-form-page.component';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';

export const routes: Routes = [
    // Para crear una ruta se hace dentro de un objeto {path: , component: nombreComponent}
    {path: '', component: HomeComponent}, // La cadena vacia '' significa que es la primera pagina en abrir
    {path: 'create', component: MovieFormPageComponent},
    {path: 'movies', component: MovieListComponent},
    {path: 'movies/:movieName', component: MovieDetailsComponent}, // Ruta parametrica
];
