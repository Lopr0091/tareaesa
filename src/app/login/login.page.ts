import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  usuario: string = '';
  clave: string = '';

  constructor(private navCtrl: NavController) {}

  login() {
    if (this.usuario === 'usuario' && this.clave === 'contraseña'){
      this.navCtrl.navigateRoot('/interpolar',{state: {usuario: this.usuario}});
    }else if(this.usuario === 'admin' && this.clave === 'admin'){
      this.navCtrl.navigateRoot(['/home'],{state: {usuario: this.usuario}});
    }
     else {
      console.log('ta malo');
    }
  }
}