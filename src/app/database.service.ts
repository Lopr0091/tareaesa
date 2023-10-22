import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject} from '@awesome-cordova-plugins/sqlite/ngx';
import {Platform, ToastController} from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  tblNoticias:string="create table if not exists noticia(id integer primary key autoincrement,"+"titulo varchar(50) not null, texto text not null;";
  private isDbReady: BehaviorSubject<boolean>=new BehaviorSubject(false);
  constructor(private sqlite: SQLite, 
    private platform: Platform, 
    public toastController: ToastController,
    public database: SQLiteObject) { }
  crearBD(){
    this.platform.ready().then(()=>{
      this.sqlite.create({
        name:'noticias.db',
        location: 'default'
      }).then((db: SQLiteObject)=>{
        this.database=db;
        this.presentToast("BD creada");
        this.crearTablas();
      }).catch(e=>this.presentToast(e));
    })
  }
  async presentToast(mensaje: string){
    const toast=await this.toastController.create({
      message: mensaje,
      duration: 3000
    })
    toast.present();
  }
  async crearTablas(){
    try{
      await this.database.executeSql(this.tblNoticias,[]);
      this.presentToast("Tabla creada");
      //this.cargarNoticias();
      this.isDbReady.next(true);
    }catch(error){
      this.presentToast("Error en crear Tabla: "+error);
    }
  }
  dbState(){
    return this.isDbReady.asObservable();
  }
}
