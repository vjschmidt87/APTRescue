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
var ImagemService = (function () {
    function ImagemService() {
        this.url = "temp";
        this.id = Math.floor(Math.random() * 600) + 1;
    }
    ImagemService.prototype.getId = function () {
        return this.id;
    };
    ;
    ImagemService.prototype.getImagem = function () {
        return this.url;
    };
    ;
    ImagemService.prototype.setUrlImagem = function (url) {
        this.url = url;
    };
    ;
    ImagemService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ImagemService);
    return ImagemService;
}());
exports.ImagemService = ImagemService;
//# sourceMappingURL=imagem.service.js.map