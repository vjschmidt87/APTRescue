"use strict";
var router_1 = require('@angular/router');
var inicio_component_1 = require('./inicio/inicio.component');
var sobre_component_1 = require('./sobre/sobre.component');
var adote_component_1 = require('./adote/adote.component');
var adotados_component_1 = require('./adotados/adotados.component');
var appRoutes = [
    { path: 'inicio', component: inicio_component_1.InicioComponent },
    { path: 'sobre', component: sobre_component_1.SobreComponent },
    { path: 'adote', component: adote_component_1.AdoteComponent },
    { path: 'adotados', component: adotados_component_1.AdotadosComponent },
    { path: '', component: inicio_component_1.InicioComponent, pathMatch: 'full' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map