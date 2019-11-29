import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MiservicioService } from '../miservicio.service';

@Component({
  selector: 'app-roles-container',
  templateUrl: './roles-container.component.html',
  styleUrls: ['./roles-container.component.css']
})
export class RolesContainerComponent implements OnInit {

  listaRoles: Observable<any>;

  constructor( private test: MiservicioService) { }

  ngOnInit() {
    //this.listaRoles = this.test.getRoles();
  }

}
