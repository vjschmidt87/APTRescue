import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component'; 
import { SobreComponent } from './sobre/sobre.component';
import { AdoteComponent } from './adote/adote.component'; 
import { AdotadosComponent } from './adotados/adotados.component';

const appRoutes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'adote', component: AdoteComponent },
  { path: 'adotados', component: AdotadosComponent },
  { path: '', component: InicioComponent, pathMatch: 'full'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);