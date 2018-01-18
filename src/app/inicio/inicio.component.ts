import {Component }         from '@angular/core';

import { UtilsService }    from '../../app/utils.service';

@Component({
    selector: 'app-inicio',
    templateUrl: 'inicio.component.html'
})
export class InicioComponent {
    constructor(private utilsService: UtilsService) {
        this.utilsService.setUrlImagem("null");
    }
};