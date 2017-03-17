import {Component }         from '@angular/core';

import { ImagemService }    from '../../app/imagem.service';

@Component({
    moduleId: module.id,
    selector: 'app-adote',
    templateUrl: '../../../../app/adote/adote.component.html',
})

export class AdoteComponent {

    constructor(private imagemService: ImagemService) {
        this.imagemService.setUrlImagem("adote");
    }
};