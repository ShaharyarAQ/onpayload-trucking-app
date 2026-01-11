import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { LoadService } from 'src/services/load.service';

@Component({
    selector: "app-load-status",
    templateUrl: "load-status.component.html",
})
export class LoadStatusComponent implements OnInit {
    loadId: string = null;
    loadData: any = null;
    loader: boolean = false;
    timeline;
    nextStatus;

    constructor(
        private route: ActivatedRoute,
        private loadService: LoadService
    ) { }

    ngOnInit() {
        this.loader = false;
        this.route.queryParamMap.subscribe(async ({ params }: any) => {
            if (!params.id) {
                return;
            } else {
                this.loadId = params.id;
                this.loadData = await this.loadService.getHashed(this.loadId);
                this.timeline = this.loadData.status.timeline;
                this.mapNextStatus();
                this.loader = true;
            }
        });
    }

    mapNextStatus() {
        const index = this.timeline.findIndex((x) => x.name === this.loadData.status.current);
        console.log(index, this.timeline.length)
        this.nextStatus = (index + 1) === this.timeline.length ? null : this.timeline[index + 1].name;
    }

    async updateStatus() {
        const index = this.timeline.findIndex((x) => x.name === this.nextStatus);
        this.timeline[index] = {
            name: this.nextStatus,
            time: (new Date()).toISOString(),
            type: 'completed'
        }

        if ((index + 1) !== this.timeline.length) {
            this.timeline[index + 1] = { ...this.timeline[index + 1], type: 'in progress' }
        }

        await this.loadService.updateWithHashedId(this.loadId, {
            status: {
                current: this.nextStatus,
                timeline: this.timeline
            }
        });

        window.location.reload();
    }
}
