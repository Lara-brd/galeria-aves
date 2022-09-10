import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BirdsRoutingModule } from './birds-routing.module';
import { FlexLayoutModule} from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { BirdComponent } from './pages/bird/bird.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { BirdTarjetaComponent } from './components/bird-tarjeta/bird-tarjeta.component';
import { ImagenPipe } from './pipes/imagen.pipe';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';



@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    BirdComponent,
    HomeComponent,
    ListadoComponent,
    BirdTarjetaComponent,
    ImagenPipe,
    ConfirmarComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    BirdsRoutingModule
  ]
})
export class BirdsModule { }
