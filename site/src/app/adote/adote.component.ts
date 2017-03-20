import {Component }         from '@angular/core';

import { UtilsService }    from '../../app/utils.service';

@Component({
    moduleId: module.id,
    selector: 'app-adote',
    templateUrl: '../../../../app/adote/adote.component.html',
})

export class AdoteComponent {

    constructor(private utilsService: UtilsService) {
        this.utilsService.setUrlImagem("adote");
    }
};