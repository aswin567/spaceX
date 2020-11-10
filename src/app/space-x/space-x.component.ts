import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SpaceXFilter } from './space-x-filter/space-x-filter';
import { SpaceXService } from './space-x.service';

@Component({
  selector: 'app-space-x',
  templateUrl: './space-x.component.html',
  styleUrls: ['./space-x.component.scss']
})
export class SpaceXComponent implements OnInit {
  spaceXList: Array<any>;
  constructor(private router: ActivatedRoute, private spaceXservice: SpaceXService) { 
    this.router.data.subscribe((routerData: Data) => {
      this.spaceXList = routerData.spaceResolverService;
    });
  }

  ngOnInit(): void {
  }

  onListFilter(filter: SpaceXFilter): void {
    this.spaceXservice.onGetSpaceXdeatils(filter).subscribe((spaceXlist: Array<any>)=>{
      this.spaceXList = spaceXlist;
    });
  }
}
