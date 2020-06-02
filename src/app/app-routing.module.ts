import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PruebasComponent } from './componentes/componentes/pruebas/pruebas.component';

const routes: Routes = [

  { path: 'home', component: PruebasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
