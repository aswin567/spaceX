import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { SpaceX } from './space-x-details/space-x';
import { SpaceXFilter } from './space-x-filter/space-x-filter';
import { SpaceXService } from './space-x.service';


@Injectable({
  providedIn: 'root'
})
export class SpaceResolverService implements Resolve<Array<SpaceX>> {
  constructor(private spaceXService: SpaceXService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Array<SpaceX>> | Promise<Array<SpaceX>> | Array<SpaceX> {
    const parms: SpaceXFilter = {
      limit : '100'
    };
    return this.spaceXService.onGetSpaceXdeatils(parms);
  }
}
