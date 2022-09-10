import { Component, OnInit } from '@angular/core';
import { Bird } from '../../interfaces/birds.interface.ts/birds.interface';
import { BirdsService } from '../../services/birds.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [`
  `]
})
export class ListadoComponent implements OnInit {

  birds:Bird[] = [];

  constructor( private _birdsService:BirdsService) { }

  ngOnInit(): void {
    this._birdsService.getBirds()
      .subscribe(resp=>{
        this.birds = resp;
      })
  }

}
