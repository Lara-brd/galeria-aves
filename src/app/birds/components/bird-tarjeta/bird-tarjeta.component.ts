import { Component, Input } from '@angular/core';
import { Bird } from '../../interfaces/birds.interface.ts/birds.interface';



@Component({
  selector: 'app-bird-tarjeta',
  templateUrl: './bird-tarjeta.component.html',
  styles: [`
    mat-card{
      margin-top:20px;
    }
  `]
})
export class BirdTarjetaComponent {

  get descripcionAve(){
    const desc = this.bird.descripcion.slice(0,50);
    return `${desc}...`
  
  }

  @Input() bird!:Bird ;

}
