import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { IftaService } from "src/services/ifta.service";

@Component({
  selector: "app-IFTAinfo",
  templateUrl: "IFTAinfo.component.html"
})
export class IFTAinfoComponent {

  iftaInfo: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private iftaService: IftaService) { }

  async ngOnInit() {
    this.iftaInfo = await this.iftaService.get(this.data.id);
  }

}