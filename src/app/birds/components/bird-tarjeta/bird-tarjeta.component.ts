import { Component, Input } from '@angular/core';
import { Bird } from '../../interfaces/birds.interface.ts/birds.interface';



@Component({
  selector: 'app-bird-tarjeta',
  templateUrl: './bird-tarjeta.component.html',
  styles: [`
    mat-card{
      margin:10px;
    }
  `]
})
export class BirdTarjetaComponent {

  get descripcionAve(){
    const desc = this.bird.descripcion.slice(0,80);
    return `${desc}...`
  
  }

  @Input() bird!:Bird ;

}
