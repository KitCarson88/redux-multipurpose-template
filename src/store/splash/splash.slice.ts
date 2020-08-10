import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SplashState, INITIAL_STATE_SPLASH } from './splash.model';

const splashSlice = createSlice({
    name: 'splash',
    initialState: INITIAL_STATE_SPLASH,
    reducers: {
        hide(state: SplashState, action: PayloadAction) {
            return state;
        },
        setState(state: SplashState, action: PayloadAction<string>) {
            return action.payload;
        }
    }
});

const { actions, reducer } = splashSlice;

export const splashReducer = reducer;
export const { hide, setState } = actions;