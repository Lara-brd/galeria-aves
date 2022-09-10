import { Pipe, PipeTransform } from '@angular/core';
import { Bird } from '../interfaces/birds.interface.ts/birds.interface';

@Pipe({
  name: 'imagen',
  //se ejecuta cada vez que el ciclo de deteccion de cambios de angular se dispare pure:false
  pure: false
})
export class ImagenPipe implements PipeTransform {

  transform( bird: Bird): string {


    if(!bird.id && !bird.alt_img){
      return 'assets/no-image.png';
    }else if (bird.alt_img){
      return bird.alt_img;
    }else{
      return `assets/birds/${bird.id}.jpg`;
    }

  }

}
