import { Component, OnInit} from '@angular/core';
import { RolService } from './rol/services/rol.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Prueba NodeJS';

  numeros: Observable<number> = of (12,37,49);

  listaRoles: Observable<any>;
  
  miron(algo){
    console.log("ya washé uwu : "+algo);    
  }

  clasehoy(){
    /*console.log("Los números son: "+this.numeros.subscribe(
      this.miron
    ));*/
    
    console.log("Contenido: "+this.listaRoles.subscribe(
      this.miron
    ));
  }

  constructor(
    private test: RolService
  ){
    this.clasehoy();
  } 

  ngOnInit(): void {
    this.test.getRoles();
  }
}
