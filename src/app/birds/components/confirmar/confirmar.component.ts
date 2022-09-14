import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Bird } from '../../interfaces/birds.interface.ts/birds.interface';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styles: [`
  
  `]
})
export class ConfirmarComponent implements OnInit {

  constructor(  private dialogRef: MatDialogRef<ConfirmarComponent>,
                private router:Router,
                @Inject(MAT_DIALOG_DATA) public data:Bird) { }

  ngOnInit(): void {
  }

  borrar(){
    this.dialogRef.close(true);
  }

  cerrar(){
    this.dialogRef.close();
  }

}
