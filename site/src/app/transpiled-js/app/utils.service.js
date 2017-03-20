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
require('rxjs/add/operator/toPromise');
var UtilsService = (function () {
    function UtilsService() {
        this.counter = 0;
        this.url = "temp";
    }
    UtilsService.prototype.getUrlImagem = function () {
        return this.url;
    };
    ;
    UtilsService.prototype.setUrlImagem = function (url) {
        this.url = url;
    };
    ;
    UtilsService.prototype.getClasseMenu = function () {
        var ret;
        switch (this.counter % 4) {
            case 0:
                ret = 'verde';
                break;
            case 1:
                ret = 'azul';
                break;
            case 2:
                ret = 'vermelho';
                break;
            case 3:
                ret = 'amarelo';
                break;
            default:
                ret = '';
                break;
        }
        this.counter++;
        return ret;
    };
    UtilsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], UtilsService);
    return UtilsService;
}());
exports.UtilsService = UtilsService;
//# sourceMappingURL=utils.service.js.map