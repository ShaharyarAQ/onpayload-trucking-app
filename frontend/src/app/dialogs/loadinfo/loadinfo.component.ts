import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ApiService } from "src/services/api.service";

@Component({
  selector: "app-loadinfo",
  templateUrl: "loadinfo.component.html"
})
export class LoadinfoComponent {
  constructor( @Inject(MAT_DIALOG_DATA) public data: any,
  private apiService: ApiService ) {}

  loadInfo: any;

  ngOnInit() {
    this.getLoadInfo(this.data.id)
  }

  async getLoadInfo(id) {
    this.loadInfo = await this.apiService.getLoadInfo(id);    
  }

}