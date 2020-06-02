import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebasComponent } from './componentes/componentes/pruebas/pruebas.component';
import { ListadoComponent } from './Listado/listado/listado.component';
import { ListasComponent } from './listados/listas/listas.component';
import { DetallesComponent } from './detalle/detalles/detalles.component';
import { IngresarComponent } from './ingresar/ingresar.component';
import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebasComponent,
    ListadoComponent,
    ListasComponent,
    DetallesComponent,
    IngresarComponent,
    ListadoClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
