import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UtilsService {
    counter : number = 0;
    url: String = "temp";

    getUrlImagem(): String  {
        return this.url;
    };
    setUrlImagem(url: String): void {
        this.url = url;
    };
    getClasseMenu(): string {
        var ret: string;
        switch (this.counter % 4) {
            case 0:
                ret = 'verde';
                break;
            case 1:
                ret = 'azul';
                break;
            case 2:
                ret = 'vermelho';
                break;
            case 3:
                ret = 'amarelo';
                break;
            default:
                ret = ''
                break;
        }
        this.counter++;
        return ret;
    }
}