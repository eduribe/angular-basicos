import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent {
 heroesBorrados: string = '';
 heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Capitan America'];  

 borrarHeroe() {
    
  this.heroesBorrados = this.heroes.pop() || '';
  

    return;
 }

}