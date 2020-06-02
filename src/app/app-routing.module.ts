import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoClientesComponent  } from 'src/app/listado-clientes/listado-clientes.component';

const routes: Routes = [

  { path: 'home', component: ListadoClientesComponent }
  //,{ path: 'listas', component: ListasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
