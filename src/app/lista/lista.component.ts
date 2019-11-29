import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  nombre: string = 'Alam Emiliano Flowers del Campo';

  //@Input () lista: Observable<any>(); 
  //@Output () delete = new EventEmitter<number>();
  //@Output () delete = new EventEmitter<number>();

  constructor( ) { }

  ngOnInit():void{
  
  
  //this.listaRoles = this.miservilleta.get

  }

 

}
