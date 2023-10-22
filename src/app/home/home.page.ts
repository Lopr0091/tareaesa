import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [NavParams],
})
export class HomePage implements OnInit {
  usuario: string = ''; 

  constructor(public navCtrl: NavController,public navParams: NavParams, private servicioBD: DatabaseService) {}

  ngOnInit() {
    console.log('se cargo el ngoninit');
    const usuario = this.navParams.get('usuario');
    if (usuario) {
      this.usuario = usuario;
      console.log('Usuario:', this.usuario);
    }
    this.servicioBD.crearBD();
  }
  ionViewWillEnter(){
    console.log('se cargo el willenter');
  }
  ionViewDidEnter(){
    console.log('Se cargo el ionviewdidenter');
  }
  ionViewWillLeave(){
    console.log('Se cargo el ionviewwilleave');
  }
  ionViewDidLeave(){
    console.log('ionviewdidleave');
  }
  ngOnDestroy(){
    console.log('se cargo el ngondestroy');
  }
  nameUser="Pedrito";
  enviarDatos(){
    localStorage.setItem('NombreUsuario',this.nameUser);//clave NombreUsuario y valor Pedrito en localstorage
    console.log('Datos enviados');
    //this.navCtrl.navigateRoot('/login');
  }
  limpiarDatos(){
    localStorage.clear();
  }
  RemoverDatos(){
    localStorage.removeItem('NombreUsuario');
  }
}