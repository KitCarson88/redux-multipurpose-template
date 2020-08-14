import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SecureStorageState, INITIAL_STATE_SECURE_STORAGE } from './secure-storage.model';

import { TestDataDTO } from '../../entities/dto/testDataDTO';

const secureStorageSlice = createSlice({
    name: 'secureStorage',
    initialState: INITIAL_STATE_SECURE_STORAGE,
    reducers: {
        addTestFavourite(state: SecureStorageState, action: PayloadAction<TestDataDTO>) {
            if (!state.infos.favouriteTests)
                state.infos.favouriteTests = [];
            state.infos.favouriteTests.push(action.payload);
        },
        removeTestFavourite(state: SecureStorageState, action: PayloadAction<number>) {
            let testIndex = state.infos.favouriteTests.findIndex(example => example.id === action.payload);
            state.infos.favouriteTests.splice(testIndex, 1);

            if (state.infos.favouriteTests.length == 0)
                state.infos.favouriteTests = null;
        },
        resetSecureStorage(state: SecureStorageState, action: PayloadAction) {
            return INITIAL_STATE_SECURE_STORAGE;
        }
    }
});

const { actions, reducer } = secureStorageSlice;

export const secureStorageReducer = reducer;
export const { addTestFavourite, removeTestFavourite, resetSecureStorage } = actions;