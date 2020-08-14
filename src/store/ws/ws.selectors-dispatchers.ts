import { Injectable } from '@angular/core';

import { dispatch } from '@redux-multipurpose/core';
import { createSelector } from '@reduxjs/toolkit';

import {
    getExampleDataThunk,
	getTestDataThunk
} from './ws.slice';

import {
	testDataAdapter
} from './ws.model';


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
export const testDataIds = 
    createSelector(
        [testData],
        (items) => items? testDataSelectors.selectIds(items) : null
    );
export const testDataSelectById = (id) =>
    createSelector(
        [testData],
        (items) => items? testDataSelectors.selectById(items, id) : null
    );

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
    
}