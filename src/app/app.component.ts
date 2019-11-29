import { Component, OnInit } from '@angular/core';
import { MiservicioService } from './miservicio.service';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'pruebanj';

  numeros: Observable<number> = of (12,37,49);

  constructor(
    private test: MiservicioService    
  ){
    this.clasehoy();
  }

  clasehoy(){
    console.log("Los números son: "+this.numeros.subscribe(
      this.miron
    ));    
  }

  miron(algo){
    console.log("ya washé uwu : "+algo);    
  }

  ngOnInit(): void {
    //throw new Error("Method not implemented.");
    // console.log('start');
    // this.test.getTodos();
    // this.test.postRol();
    // this.test.delRol();
  }
}
