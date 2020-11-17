import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppService } from '../app.service';

import { SpaceX } from './space-x-details/space-x';
import { SpaceXFilter } from './space-x-filter/space-x-filter';
import { SpaceXService } from './space-x.service';

@Component({
  selector: 'app-space-x',
  templateUrl: './space-x.component.html',
  styleUrls: ['./space-x.component.scss']
})
export class SpaceXComponent implements OnDestroy{
  spaceXList: Array<SpaceX>;
  onGetSpaceXdeatilsSubscription: Subscription;
  routerDataSubscription: Subscription;

  constructor(private router: ActivatedRoute, private spaceXservice: SpaceXService, private appService: AppService) {
    this.router.data.subscribe((routerData: Data) => {
      this.spaceXList = routerData.spaceResolverService;
    });
  }

  onListFilter(filter: SpaceXFilter): void {
    this.appService.isLoading$.next(true);
    this.spaceXservice.onGetSpaceXdeatils(filter).subscribe((spaceXlist: Array<SpaceX>) => {
      this.spaceXList = spaceXlist;
      this.appService.isLoading$.next(false);
    });
  }

  ngOnDestroy(): void{
    this.onGetSpaceXdeatilsSubscription.unsubscribe();
    this.routerDataSubscription.unsubscribe();
  }
}
