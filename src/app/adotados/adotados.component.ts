import { Component } from "@angular/core";

import { UtilsService } from "../../app/utils.service";

@Component({
  selector: "app-adotados",
  templateUrl: "adotados.component.html"
})
export class AdotadosComponent {
  constructor(private utilsService: UtilsService) {
    this.utilsService.setUrlImagem("adotados");
  }
}
