import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.sass']
})
export class ListaComponent implements OnInit {

  nombre: string = 'Hola soila lista';

  @Input() lista: Observable<any>;

  @Output() delete = new EventEmitter<number>();
  @Output() update = new EventEmitter<number>();

  constructor(
  ){}
    
  ngOnInit(): any {
    this.lista.subscribe(); //le agregue esto y le cambie de void a any
  }

  remove(id: number){
    this.delete.emit(id);
  }

  modify(id: number){
    this.update.emit(id);
  }

}
