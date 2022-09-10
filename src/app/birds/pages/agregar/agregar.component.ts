import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';
import { Bird, Familia } from '../../interfaces/birds.interface.ts/birds.interface';
import { BirdsService } from '../../services/birds.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
    img{
      width: 100%;
      border-radius:5px;
    }
  `]
})
export class AgregarComponent implements OnInit {


  familias = [
    {
      id:'Corvidae',
      desc:'Corvidae'
    },
    {
      id:'Muscicapidae',
      desc:'Muscicapidae'
    },
    {
      id:'Paridae',
      desc:'Paridae'
    },
    {
      id:'Falconidae',
      desc:'Falconidae'
    },
    {
      id:'Estrildidae',
      desc:'Estrildidae'
    }
  ]


  // inicializo bird publisher:tipado.pordefecto
  bird:Bird = {
    nombre:'',
    nombre_cientifico:'',
    alimentacion:'',
    descripcion:'',
    alt_img:'',
    familia:Familia.corvidae,
  }

  /////////////////////////////////////////////////////

  constructor(  private birdsService:BirdsService,
                private activatedRoute:ActivatedRoute,
                private router:Router,
                private snackBar:MatSnackBar,
                public dialog:MatDialog) { }

/////////////////////////////////////////////////////////

  ngOnInit(): void {
    if( !this.router.url.includes('editar')){
      return;
    }
    this.activatedRoute.params
      .pipe(
        switchMap( ({id})=> this.birdsService.getHeroePorId(id) )
      )  
      .subscribe(bird => this.bird = bird)
    }

  guardar(){

    if(this.bird.nombre.trim().length === 0){
      return;
    }

    //actualizar
    if(this.bird.id){
      this.birdsService.actualizarBird(this.bird)
        .subscribe( bird => this.mostrarSnakbar('Datos actualizados'));
    }else{
      //crear
      this.birdsService.agregarBird( this.bird )
        .subscribe( bird => {
          this.router.navigate(['/birds/editar', bird.id]);
          this.mostrarSnakbar('Registro realizado');
        })    
      }

  
  }

  borrarBird(){

    const dialog = this.dialog.open(ConfirmarComponent, {
      width: '250px',
      data:this.bird
    });

    dialog.afterClosed().subscribe(
      (result)=>{
        if(result){
          this.birdsService.borrarBird(this.bird.id!)
            .subscribe( resp =>{
              this.router.navigate(['/birds']);
            });

        }
      }
    )
  }

  mostrarSnakbar(mensaje:string){

    this.snackBar.open(mensaje, 'ok!', {
      duration:2500
    });

  }
}
