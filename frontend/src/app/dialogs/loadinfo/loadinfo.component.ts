import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { LoadService } from "src/services/load.service";

@Component({
  selector: "app-loadinfo",
  templateUrl: "loadinfo.component.html"
})
export class LoadinfoComponent {

  loadInfo: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private loadService: LoadService) { }

  async ngOnInit() {
    this.loadInfo = await this.loadService.get(this.data.id);
  }

}