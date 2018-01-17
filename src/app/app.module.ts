import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';

import { UtilsService }       from './utils.service';

import { AppComponent }       from './app.component';
import { InicioComponent }    from './inicio/inicio.component';
import { SobreComponent }     from './sobre/sobre.component';
import { AdoteComponent }     from './adote/adote.component'; 
import { AdotadosComponent }  from './adotados/adotados.component';
import { ListaComponent }     from './lista-pets/lista.component'

import { routing }            from './app.routing';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  declarations: [ 
    AppComponent,
    InicioComponent,
    SobreComponent,
    AdoteComponent,
    AdotadosComponent,
    ListaComponent,
  ],
  providers: [ UtilsService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { 
};
