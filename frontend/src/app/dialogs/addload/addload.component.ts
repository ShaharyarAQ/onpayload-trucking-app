import { Component, Inject, OnInit } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddvehicleComponent } from "../addvehicle/addvehicle.component";
import { AddclientComponent } from "../addclient/addclient.component";
import { OnboardComponent } from "../onboard/onboard.component";
import { LoadService } from "src/services/load.service";
import { ApiService } from "src/services/api.service";

@Component({
  selector: "app-addload",
  templateUrl: "addload.component.html",
  styleUrls: ['./addload.component.scss']
})
export class AddloadComponent implements OnInit {

  form: FormGroup;
  loadInfo: any;
  isUpdate: boolean;
  date: Date;
  members: any = [];
  drivers = [];
  clients: any = [];
  vehicles = [];
  trailers = [];
  loader: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private matDialog: MatDialog,
    private loadService: LoadService,
    private dialogRef: MatDialogRef<AddloadComponent>,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private apiService: ApiService
  ) { }

  async loadData() {
    this.loader = false;

    this.members = await this.apiService.getMembers();

    this.clients = await this.apiService.getClients();

    this.members.forEach(member => {
      if (member.jobTitle === 'Driver') this.drivers.push(member)
    });

    const vehiclesData: any = await this.apiService.getVehicles();
    vehiclesData.forEach((vehicle) => {
      if (vehicle.vehicleType === 'Trailer') this.trailers.push(vehicle);
      else this.vehicles.push(vehicle)
    });

    this.loader = true;

  }


  async ngOnInit() {
    await this.loadData();
    this.isUpdate = this.data?.isUpdate;
    this.form = this.formBuilder.group({
      date: [this.isUpdate ? this.data.loadInfo.date : '', Validators.required],
      driverId: [this.isUpdate ? this.data.loadInfo.driverId : '', Validators.required],
      pay: [this.isUpdate ? this.data.loadInfo.pay : '', Validators.required],
      pickupCity: [this.isUpdate ? this.data.loadInfo.pickupCity : '', Validators.required],
      pickupState: [this.isUpdate ? this.data.loadInfo.pickupState : '', Validators.required],
      pickupZipcode: [this.isUpdate ? this.data.loadInfo.pickupZipcode : '', Validators.required],
      destinationCity: [this.isUpdate ? this.data.loadInfo.destinationCity : '', Validators.required],
      destinationState: [this.isUpdate ? this.data.loadInfo.destinationState : '', Validators.required],
      destinationZipcode: [this.isUpdate ? this.data.loadInfo.destinationZipcode : '', Validators.required],
      distance: [this.isUpdate ? this.data.loadInfo.distance : '', Validators.required],
      loadType: [this.isUpdate ? this.data.loadInfo.loadType : '', Validators.required],
      dispatcherId: [this.isUpdate ? this.data.loadInfo.dispatcherId : '', Validators.required],
      vehicleId: [this.isUpdate ? this.data.loadInfo.vehicleId : '', Validators.required],
      trailerId: [this.isUpdate ? this.data.loadInfo.trailerId : '', Validators.required],
      clientId: [this.isUpdate ? this.data.loadInfo.clientId : '', Validators.required],
      note: [this.isUpdate ? this.data.loadInfo.note : ''],
    });
  }

  addMember() {
    this.matDialog.open(OnboardComponent);
  }

  addClient() {
    this.matDialog.open(AddclientComponent);
  }

  addVehicle() {
    this.matDialog.open(AddvehicleComponent);
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  async onSubmit() {

    if (this.isUpdate) {
      const response: any = await this.loadService.update(
        this.data.loadInfo.id,
        this.form.value
      );
      this.snackBar.open('Load Updated');
      this.dialogRef.close(true);
    }
    else {
      if (this.form.valid) {
        const data: any = await this.loadService.add(this.form.value);
        this.dialogRef.close(true);
      } else {
        // error
      }
    }
  }

}
