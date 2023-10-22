import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-interpolar',
  templateUrl: './interpolar.page.html',
  styleUrls: ['./interpolar.page.scss'],
})
export class InterpolarPage{
  usuarioNombre:string | null=null;
  direccion='Egaña hola';
  persona={
    nombre:'Francisco',
    apellido:'Calfun',
  }
  sumarDosNumeros(num1:number,num2:number){
    return num1 + num2;
  }
  duplicar(palabra:string){
    return palabra+' '+palabra;
  }

  constructor(private router: Router) { }
  irLogin(){
    this.router.navigate(['/login']);
  }
}
