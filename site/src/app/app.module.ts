import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';

import { ImagemService }       from './imagem.service';

import { AppComponent }       from './app.component';
import { InicioComponent }    from './inicio/inicio.component';
import { SobreComponent }     from './sobre/sobre.component';
import { AdoteComponent }     from './adote/adote.component'; 
import { AdotadosComponent }  from './adotados/adotados.component';

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
  ],
  providers: [ ImagemService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { 
};
