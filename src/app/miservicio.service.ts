import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class MiservicioService {

  constructor(private rtr: HttpClient){}

  httpOptions = {

    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  getRoles(){
    this.rtr
      .get('https://localhost:5001/roles/aget')
      .pipe(
        tap(d => console.log(d))
      );
  }

  postRol(roles){
    this.rtr
      .post('https://localhost:5001/roles/apost',
          JSON.stringify(roles),this.httpOptions
        )
      .pipe(
        tap(d => console.log(d))
      );
  }

  putRol(id, roles){
    this.rtr
      .put('https://localhost:5001/roles/aput'+id,
          JSON.stringify(roles),this.httpOptions
        )
      .pipe(
        tap(d => console.log(d))
      );
  }

  delRol(){
    this.rtr
      .delete('https://localhost:5001/roles/adel/15')
      .pipe(
        tap(d => console.log(d))
      );
  }
}
