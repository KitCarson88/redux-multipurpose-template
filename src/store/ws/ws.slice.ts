import { Injector } from '@angular/core';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { prepareThunk, prepareThunkActionReducers } from '@redux-multipurpose/core';

import { 
    testDataAdapter,
	INITIAL_STATE_WEB_SERVICES
} from './ws.model';

import {
    ExamplesProvider
} from '../../providers';

//Manually inject providers
const wsProvidersInjector = Injector.create({ providers: [
    { provide: ExamplesProvider }
]});
const examplesProvider = wsProvidersInjector.get(ExamplesProvider);

//Thunks
export const getExampleDataThunk = prepareThunk('ws', 'getExampleData', examplesProvider.getExampleData);
export const getTestDataThunk = prepareThunk('ws', 'getTestData', examplesProvider.getTestData);

//Ws actions and reducers
const wsSlice = createSlice({
    name: 'ws',
    initialState: INITIAL_STATE_WEB_SERVICES,
    reducers: {
        resetWsData(state, action: PayloadAction<any>) {
            state = INITIAL_STATE_WEB_SERVICES;
        }
    },
    extraReducers: prepareThunkActionReducers([
		{ thunk: getExampleDataThunk, substate: 'example', adapter: null },
        { thunk: getTestDataThunk, substate: 'testData', adapter: testDataAdapter }
    ])
});

export const wsReducer = wsSlice.reducer;
export const resetWsData = wsSlice.actions.resetWsData;