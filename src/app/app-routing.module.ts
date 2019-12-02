import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { RolComponent } from './rol/conteiners/rol.component';
import { AgregarComponent } from './rol/conteiners/agregar/agregar.component';
import { EditarComponent } from './rol/conteiners/editar/editar.component';
import { ListaComponent } from './rol/components/lista/lista.component';



const routes: Routes = [
  {
    path: 'test', //este es para probar el evento del click gg
    component: ListaComponent
  },
  {
    path: 'roles', 
    component: RolComponent,
    //children: []
  },
  {
    path: 'editar', //este lo quite del children de roles...
    component: EditarComponent
  },
  {
    path: 'agregar', 
    component: AgregarComponent
  },
  {
    path: '', 
    redirectTo: '/roles',
    pathMatch: 'full'
  },
  {
    path: '**', 
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
