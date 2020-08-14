import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { StorageState, INITIAL_STATE_STORAGE } from './storage.model';

import { ExampleDTO } from '../../entities/dto/exampleDTO';

const storageSlice = createSlice({
    name: 'storage',
    initialState: INITIAL_STATE_STORAGE,
    reducers: {
        addExampleFavourite(state: StorageState, action: PayloadAction<ExampleDTO>) {
            if (!state.favouriteExamples)
                state.favouriteExamples = [];
            state.favouriteExamples.push(action.payload);
        },
        removeExampleFavourite(state: StorageState, action: PayloadAction<number>) {
            let exampleIndex = state.favouriteExamples.findIndex(example => example.id === action.payload);
            state.favouriteExamples.splice(exampleIndex, 1);

            if (state.favouriteExamples.length == 0)
                state.favouriteExamples = null;
        },
        resetStorage(state: StorageState, action: PayloadAction) {
            return INITIAL_STATE_STORAGE;
        }
    }
});

const { actions, reducer } = storageSlice;

export const storageReducer = reducer;
export const { addExampleFavourite, removeExampleFavourite, resetStorage } = actions;