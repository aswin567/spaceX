import { Component } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

import { SpaceX } from './space-x-details/space-x';
import { SpaceXFilter } from './space-x-filter/space-x-filter';
import { SpaceXService } from './space-x.service';

@Component({
  selector: 'app-space-x',
  templateUrl: './space-x.component.html',
  styleUrls: ['./space-x.component.scss']
})
export class SpaceXComponent {
  spaceXList: Array<SpaceX>;

  constructor(private router: ActivatedRoute, private spaceXservice: SpaceXService) { 
    this.router.data.subscribe((routerData: Data) => {
      this.spaceXList = routerData.spaceResolverService;
    });
  }

  onListFilter(filter: SpaceXFilter): void {
    this.spaceXservice.onGetSpaceXdeatils(filter).subscribe((spaceXlist: Array<SpaceX>)=>{
      this.spaceXList = spaceXlist;
    });
  }
}
