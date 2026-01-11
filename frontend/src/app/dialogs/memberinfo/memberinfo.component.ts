import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ApiService } from "src/services/api.service";

@Component({
  selector: "app-memberinfo",
  templateUrl: "memberinfo.component.html"
})
export class MemberinfoComponent implements OnInit {
  constructor( @Inject(MAT_DIALOG_DATA) public data: any,
  private apiService: ApiService ) {}

  memberInfo: any;

  async ngOnInit() {
    this.memberInfo = await this.apiService.getMemberInfo(this.data.id);
  }

}