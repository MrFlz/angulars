import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RolesComponent } from './roles/roles.component';
import { EditarComponent } from './editar/editar.component';

const routes: Routes = [
  {
    path: 'test', 
    component: ListaComponent 
  },
  {
    path: 'nuevoRol', 
    component: RolesComponent 
  },
  {
    path: 'editRol/:id', 
    component: EditarComponent 
  },
  {
    path: '', 
    redirectTo: '/test', 
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
