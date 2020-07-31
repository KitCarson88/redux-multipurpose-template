import { Injectable } from '@angular/core';

import { dispatch } from '@redux-multipurpose/core';
import { createSelector } from '@reduxjs/toolkit';

import {
    getExampleDataThunk,
	getTestDataThunk,
	//Thunks imports: PLEASE DON'T DELETE THIS PLACEHOLDER
} from './ws.slice';
import { testDataAdapter } from './ws.model';
//Adapters imports: PLEASE DON'T DELETE THIS PLACEHOLDER

export const testData = state => state.ws.testData.data;
const testDataSelectors = testDataAdapter.getSelectors();

export const testDataObject =
    createSelector(
        [testData],
        (items) => items? testDataSelectors.selectEntities(items) : null
    );
export const testDataArray = 
    createSelector(
        [testData],
        (items) => items? testDataSelectors.selectAll(items) : null
    );
export const testDataCount = 
    createSelector(
        [testData],
        (items) => items? testDataSelectors.selectTotal(items) : null
    );
//Selectors: PLEASE DON'T DELETE THIS PLACEHOLDER

@Injectable()
export class WsActions
{
    @dispatch()
    getExampleData = () => {
        return getExampleDataThunk();
    };

    @dispatch()
    getTestData = () => {
        return getTestDataThunk();
    };

    //Actions: PLEASE DON'T DELETE THIS PLACEHOLDER
}