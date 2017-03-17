import {Component }         from '@angular/core';

import { ImagemService }    from '../../app/imagem.service';

@Component({
    moduleId: module.id,
    selector: 'app-inicio',
    templateUrl: '../../../../app/inicio/inicio.component.html'
})
export class InicioComponent {
    constructor(private imagemService: ImagemService) {
        this.imagemService.setUrlImagem("null");
    }
};