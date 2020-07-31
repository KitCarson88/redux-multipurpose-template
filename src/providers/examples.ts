import { Injectable } from '@angular/core';
import { delay, timeout } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ExamplesProvider
{
    constructor() {}

    getExampleData()
    {
        //Provide here your call to data retrieve, replacing following example empty promise
        
        return new Promise((resolve, reject) => {
            resolve({});
        });
    }
}