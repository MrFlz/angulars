import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Rol } from '../dto/rol';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  constructor(
    private http: HttpClient
  ) { }

  getRoles(): Observable<Rol[]>{
    return this.http.get<Rol[]>('https://localhost:5001/role/aget');
  }

  findBy(id: string): Observable<Rol[]>{
    return this.http.get<Rol[]>('https://localhost:5001/role/aget/'+id);
  }

  save(rol: Rol): Observable<any>{
    return this.http.post<any>('https://localhost:5001/role/apost', rol);
  }

  update(rol: Rol, id: string): Observable<any>{
    return this.http.put<any>('https://localhost:5001/role/aput/'+id, rol);
  }

  delete(id: string): Observable<any>{
    return this.http.delete('https://localhost:5001/role/adel/'+id);
  }

}
