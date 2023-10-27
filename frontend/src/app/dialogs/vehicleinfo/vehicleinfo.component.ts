import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ApiService } from "src/services/api.service";

@Component({
  selector: "app-vehicleinfo",
  templateUrl: "vehicleinfo.component.html"
})
export class VehicleinfoComponent implements OnInit {
  constructor( @Inject(MAT_DIALOG_DATA) public data: any,
  private apiService: ApiService ) {}

  vehicleInfo: any;

  ngOnInit() {
    this.getVehicleInfo(this.data.id)
  }

  async getVehicleInfo(id) {
    this.vehicleInfo = await this.apiService.getVehicleInfo(id);
  }

}