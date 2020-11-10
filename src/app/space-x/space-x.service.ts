import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';
import { SpaceXFilter } from './space-x-filter/space-x-filter'
@Injectable({
  providedIn: 'root'
})
export class SpaceXService {

  constructor(private appService: AppService) { }

  onGetSpaceXdeatils(parms: SpaceXFilter): Observable<Array<any>>{
    return this.appService.getData(parms);
  }
}
