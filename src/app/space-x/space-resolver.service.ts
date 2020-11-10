import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SpaceXFilter } from './space-x-filter/space-x-filter';
import { SpaceXService } from './space-x.service';

@Injectable({
  providedIn: 'root'
})
export class SpaceResolverService implements Resolve<any> {
  constructor(private spaceXService: SpaceXService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    const parms: SpaceXFilter = {
      limit : '100'
    }
    return this.spaceXService.onGetSpaceXdeatils(parms);
  }
}
