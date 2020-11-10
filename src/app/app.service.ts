import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) { }

  getData(params): Observable<Array<any>>{

    return this.httpClient.get<Array<any>>('https://api.spacexdata.com/v3/launches', {params});
  }
}
