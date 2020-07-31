import { Injectable } from '@angular/core';
import { delay, timeout } from 'rxjs/operators';

import { Api } from './api/api';

import { ServiceLocator } from '../services/locator.service';

@Injectable({
    providedIn: 'root'
})
export class ExamplesProvider
{
    constructor() {}

    getExampleData()
    {
        let api: Api = ServiceLocator.injector.get(Api);

        //Provide here your call to data retrieve, replacing following example empty promise
        return api.get('assets/mock-data/get-example-data.json').pipe(delay(2000), timeout(3000)).toPromise();
    }
}