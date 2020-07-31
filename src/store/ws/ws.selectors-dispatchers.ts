import { Injectable } from '@angular/core';

import { dispatch } from '@redux-multipurpose/core';
import { createSelector } from '@reduxjs/toolkit';

import {
    getExampleDataThunk,
	//Thunks imports: PLEASE DON'T DELETE THIS PLACEHOLDER
} from './ws.slice';
//Adapters imports: PLEASE DON'T DELETE THIS PLACEHOLDER
//Selectors: PLEASE DON'T DELETE THIS PLACEHOLDER

@Injectable()
export class WsActions
{
    @dispatch()
    getExampleData = () => {
        getExampleDataThunk();
    };

    //Actions: PLEASE DON'T DELETE THIS PLACEHOLDER
}