import { createEntityAdapter } from '@reduxjs/toolkit';

import { createWsInitialState } from '@redux-multipurpose/core';

import '../../extensions/dates.extension';

import { TestDataDTO } from '../../entities/dto/testDataDTO';

export const testDataAdapter = createEntityAdapter<TestDataDTO>({
    // Assume IDs are stored in a field other than `element.id` where element is one object of TestData
    selectId: element => element.id,
    // Keep the "all IDs" array sorted based on testData ids
    sortComparer: (a, b) => new Date(b.date).compareWith(new Date(a.date))
});

export const INITIAL_STATE_WEB_SERVICES = createWsInitialState([
	'example',
    { 'testData': { data: testDataAdapter.getInitialState({ available: null }) }}
]);

//testData substate 'available' flag is triggered from core to track initial null data state (instead of empty initial data provided from adapter)