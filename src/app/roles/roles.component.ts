import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'; 
import { MiservicioService } from '../miservicio.service'; 
import { Observable } from 'rxjs';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  // rol = {
  //   nombre: '',
  //   correo: ''
  // };

  listaRoles: Observable<any>;

  validacionesTest = [ Validators.required ]

  public rolesForm = new FormGroup({
    rolename : new FormControl('', this.validacionesTest), 
  })
  
  constructor(
    private servilleta: MiservicioService,
    private router: Router ) {    
  }
  nose: any[];  

  ngOnInit() {
    //this.getRoles()
  }

  // getRoles(){
  //   return this

  // } 

  onSave(){
    console.log('Me picaste mi ojito we unu jiji');

    /*this.servilleta.postRol(this.rolesForm.value).subscribe((data: {}) =>{
      console.log(data);
    })*/
  }

  prueba(){
    console.log('Le dijiste submit al formulario');
    console.log(this.rolesForm.value);
    console.log(this.rolesForm.valid);
  }

}
