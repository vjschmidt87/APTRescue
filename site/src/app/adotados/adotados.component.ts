import {Component }         from '@angular/core';

import { ImagemService }    from '../../app/imagem.service';

@Component({
    moduleId: module.id,
    selector: 'app-adotados',
    templateUrl: '../../../../app/adotados/adotados.component.html'
})
export class AdotadosComponent {
    constructor(private imagemService: ImagemService) {
        this.imagemService.setUrlImagem("adotados");
    }
};