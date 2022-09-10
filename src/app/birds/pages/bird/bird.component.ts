import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Bird } from '../../interfaces/birds.interface.ts/birds.interface';
import { BirdsService } from '../../services/birds.service';

@Component({
  selector: 'app-bird',
  templateUrl: './bird.component.html',
  styles: [`
    img{
      width:100%;
      border-radius:5px;
    }
    button{
      margin:20px;
    }
  `]
})
export class BirdComponent implements OnInit {

  bird!:Bird;


  constructor(  private activatedRoute:ActivatedRoute,
                private heroesService:BirdsService,
                private router:Router
                ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(( { id } )=> this.heroesService.getHeroePorId(id))
      )
      .subscribe(bird => this.bird = bird)

  }

  regresar(){
    this.router.navigate(['/birds/listado']);
  }

}
