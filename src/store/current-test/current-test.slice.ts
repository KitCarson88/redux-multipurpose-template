import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CurrentTestState, INITIAL_STATE_CURRENT_TEST } from './current-test.model';
import { TestDataDTO } from '../../entities/dto/testDataDTO';

const currentTestSlice = createSlice({
    name: 'currentTest',
    initialState: INITIAL_STATE_CURRENT_TEST,
    reducers: {
        addTest(state: CurrentTestState, action: PayloadAction<TestDataDTO>) {
            state.test = action.payload;
        },
        removeTest(state: CurrentTestState, action: PayloadAction<number>) {
            state.test = null;
        }
    }
});

const { actions, reducer } = currentTestSlice;

export const currentTestReducer = reducer;
export const { addTest, removeTest } = actions;