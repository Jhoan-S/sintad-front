import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntidadComponent } from './pages/entidad/entidad.component';
import { PagesRoutingModule } from './pages/pages.routing';


const routes: Routes = [
  { path: '', redirectTo: '/mantenimiento/entidad', pathMatch: 'full' },
  { path: '**', redirectTo: '/mantenimiento/entidad', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
