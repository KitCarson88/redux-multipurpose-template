import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Api
{
  constructor(private http: HttpClient) {}

  get(endpoint: string)
  {
    return this.http.get(endpoint + "?" + new Date().getTime())
      .pipe(map(data => {
        console.log(`Received get ${ endpoint }: `, data);
        return data;
      }, catchError(error => {
        console.log("An error occured on debugGet: ", error);
        throw(error);
      })));
  }
}
