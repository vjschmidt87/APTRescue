import { Component } from "@angular/core";

import { UtilsService } from "./utils.service";

@Component({
  selector: "apata-app",
  templateUrl: "app.component.html"
})
export class AppComponent {
  constructor(private utilsService: UtilsService) {
    this.utilsService.setUrlImagem("null");
  }
}
