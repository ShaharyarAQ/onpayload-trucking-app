import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { LoadService } from 'src/services/load.service';

@Component({
    selector: "app-load-status",
    templateUrl: "load-status.component.html",
})
export class LoadStatusComponent implements OnInit {
    loadId: string = null;
    loadData: any = null;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private loadService: LoadService
    ) { }

    ngOnInit() {
        this.route.queryParamMap.subscribe(async ({ params }: any) => { 
            if(!params.id){
                return;
            } else {
                this.loadId = params.id;
                this.loadData = await this.loadService.getHashed(this.loadId);
            }
        });
    }
}
