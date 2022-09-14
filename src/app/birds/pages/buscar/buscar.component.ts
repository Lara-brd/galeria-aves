import { Component } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Bird } from '../../interfaces/birds.interface.ts/birds.interface';
import { BirdsService } from '../../services/birds.service';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  encapsulation:ViewEncapsulation.None,
  styles: [`
    .bird-tarjeta {
      max-width:500px;
    }
  `]
})
export class BuscarComponent {

  termino:string='';
  birds:Bird[]=[];
  birdSeleccionado:Bird | undefined ;


  //////////////////////////////////////////////////////////

  constructor( private _birdService:BirdsService) { }

  /////////////////////////////////////////////////////////


  buscando(){
    this._birdService.getSugerencias(this.termino.trim())
      .subscribe(birds => this.birds = birds);
  }

  opcionSeleccionada( event:MatAutocompleteSelectedEvent ){
    if(!event.option.value){
      this.birdSeleccionado = undefined;
      return;
    }

    const bird:Bird = event.option.value;
    this.termino = bird.nombre;
    //añado esta petición que ya está en el servicio
    this._birdService.getBirdPorId(bird.id!)
      .subscribe( 
        brd => this.birdSeleccionado = brd);
  }

}
