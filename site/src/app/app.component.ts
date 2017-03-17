import { Component }      from '@angular/core';

import { ImagemService }  from './imagem.service';

@Component({
  moduleId: module.id,
  selector: 'apata-app',
  templateUrl: '../../app.component.html',

})
export class AppComponent {
  constructor(private imagemService: ImagemService) {
    this.imagemService.setUrlImagem("null");
  }
};
