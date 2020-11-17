import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { SpaceX } from './space-x/space-x-details/space-x';
import { SpaceXFilter } from './space-x/space-x-filter/space-x-filter';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor(private httpClient: HttpClient) { }

  getData(filterParams: SpaceXFilter): Observable<Array<SpaceX>> {
    let params = new HttpParams();
    for (const filter in filterParams) {
      if (filter) {
        params = params.append(filter, filterParams[filter]);
      }
    }

    return this.httpClient.get<Array<SpaceX>>(`${environment.URL.baseURL}/${environment.URL.version}/launches`, { params });
  }
}
