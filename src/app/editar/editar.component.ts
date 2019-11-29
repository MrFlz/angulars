import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'; 
import { MiservicioService } from '../miservicio.service';
import { Router, ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  actRoute: any;

  roleid = this.actRoute.snapshot.params['id'];

  validacionesTest = [ Validators.required ]

  public rolesForm = new FormGroup({
    roleid : new FormControl('', this.validacionesTest), 
    rolename : new FormControl('', this.validacionesTest), 
  })
  

  constructor(private servilleta: MiservicioService ) { }

  ngOnInit() {
  }

  onEdit(){
    console.log('Me picaste mi ojito we unu jiji');

    /*this.servilleta.putRol(this.id,this.rolesForm.value).subscribe((data: {}) =>{
      console.log(data);
      //this.router
    })*/
  }
  id(id: any, value: any) {
    throw new Error("Method not implemented.");
  }

}
