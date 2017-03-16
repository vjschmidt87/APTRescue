"use strict";
var router_1 = require('@angular/router');
var inicio_component_1 = require('./inicio/inicio.component');
var sobre_component_1 = require('./sobre/sobre.component');
var appRoutes = [
    { path: 'inicio', component: inicio_component_1.InicioComponent },
    { path: 'sobre', component: sobre_component_1.SobreComponent },
    { path: '', component: inicio_component_1.InicioComponent, pathMatch: 'full' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map