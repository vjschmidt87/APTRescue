"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var utils_service_1 = require('./utils.service');
var app_component_1 = require('./app.component');
var inicio_component_1 = require('./inicio/inicio.component');
var sobre_component_1 = require('./sobre/sobre.component');
var adote_component_1 = require('./adote/adote.component');
var adotados_component_1 = require('./adotados/adotados.component');
var lista_component_1 = require('./lista-pets/lista.component');
var app_routing_1 = require('./app.routing');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_1.routing,
            ],
            declarations: [
                app_component_1.AppComponent,
                inicio_component_1.InicioComponent,
                sobre_component_1.SobreComponent,
                adote_component_1.AdoteComponent,
                adotados_component_1.AdotadosComponent,
                lista_component_1.ListaComponent,
            ],
            providers: [utils_service_1.UtilsService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
;
//# sourceMappingURL=app.module.js.map