import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component'; 
import { SobreComponent } from './sobre/sobre.component';

const appRoutes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'sobre', component: SobreComponent },
  { path: '', component: InicioComponent, pathMatch: 'full'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);