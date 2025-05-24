import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class-clases-dinamicas',
  imports: [NgClass], //* Para usar las ngClass se deben importar
  templateUrl: './ng-class-clases-dinamicas.component.html',
  styleUrl: './ng-class-clases-dinamicas.component.css'
})
export class NgClassClasesDinamicasComponent {
  isDark: boolean = false;

  toggleDark(){
    this.isDark = !this.isDark;
  }
}
