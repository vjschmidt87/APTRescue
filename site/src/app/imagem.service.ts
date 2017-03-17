import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ImagemService {
    url: String = "temp";
    id: Number = Math.floor(Math.random() * 600) + 1;
    getId(): Number  {
        return this.id;
    };
    getImagem(): String  {
        return this.url;
    };
    setUrlImagem(url: String): void {
        this.url = url;
    };
}