import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';

import { AppComponent }     from './app.component';
import { InicioComponent }  from './inicio/inicio.component';
import { SobreComponent }   from './sobre/sobre.component';
import { routing }          from './app.routing';

@NgModule({
  imports:      [ 
    BrowserModule,
    routing,
  ],
  declarations: [ 
    AppComponent,
    InicioComponent,
    SobreComponent,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
