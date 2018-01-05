import {Component}          from '@angular/core';
import { UtilsService }    from '../../app/utils.service';

@Component({
    moduleId: module.id,
    selector: 'app-sobre',
    templateUrl: './sobre.component.html'
})
export class SobreComponent {
    constructor(private utilsService: UtilsService) {
        this.utilsService.setUrlImagem("sobre");
    }
};