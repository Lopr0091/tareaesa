import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-pruebaapi',
  templateUrl: './pruebaapi.page.html',
  styleUrls: ['./pruebaapi.page.scss'],
})
export class PruebaapiPage implements OnInit {
  datos: any;
  datito :any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    /*this.apiService.getPost(1).subscribe(data=>{
      this.datos=data;
    })*/
    this.apiService.getPosts().subscribe(data=>{
      this.datito = data;
    })

  }
}
