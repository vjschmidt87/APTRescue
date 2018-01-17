import {Component }         from '@angular/core';

import { UtilsService }    from '../../app/utils.service';

@Component({
    selector: 'app-adote',
    templateUrl: 'adote.component.html',
})

export class AdoteComponent {

    constructor(private utilsService: UtilsService) {
        this.utilsService.setUrlImagem("adote");
    }
};