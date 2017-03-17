import {Component}          from '@angular/core';
import { ImagemService }    from '../../app/imagem.service';

@Component({
    moduleId: module.id,
    selector: 'app-sobre',
    templateUrl: '../../../../app/sobre/sobre.component.html'
})
export class SobreComponent {
    constructor(private imagemService: ImagemService) {
        this.imagemService.setUrlImagem("sobre");
    }
};