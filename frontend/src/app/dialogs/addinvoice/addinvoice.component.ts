import { Component } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { AddclientComponent } from "../addclient/addclient.component";



@Component({
  selector: "app-addinvoice",
  templateUrl: "addinvoice.component.html"
})
export class AddinvoiceComponent {
  constructor(private matDialog: MatDialog) { }

  helloWorld() {
    var inputs = document.querySelectorAll('#main .temporary');
    let count = 0;
    inputs.forEach((item: any) => {
      const quantity = item.getElementsByClassName('quantity')[0].value;
      const cost = item.getElementsByClassName('cost')[0].value;
      count = count + (parseFloat(quantity) * parseFloat(cost));

      item.getElementsByClassName('total')[0].innerHTML = (parseFloat(quantity) * parseFloat(cost));
    })

    document.getElementById('total').innerHTML = `$${count}`;
    document.getElementById('total1').innerHTML = `$${count}`
  }

  addNewItem() {
    const html = `
    <div class="row temporary">
      <div class="col-md-3">
        <input class="form-control" type="text" value="" />
        <hr>
      </div>
    <div class="col-md-3">
       <input class="form-control quantity" type="number" value="0" />
       <hr>
    </div>
    <div class="col-md-3">
       <input class="form-control cost" type="number" value="0" />
       <hr>
    </div>
        <div class="col-md-3">
            <span class="total pt-2">0</span>
            <button class="btn btn-warning btn-icon btn-sm float-right" (change)="helloWorld()" onClick="return this.parentNode.parentNode.remove()">
            <i class=" tim-icons icon-simple-remove"></i></button>
        </div>
    </div>
    `;
    document.getElementById('main').insertAdjacentHTML("beforeend", html);
  }

  addClient() {
    this.matDialog.open(AddclientComponent)
  }



}
