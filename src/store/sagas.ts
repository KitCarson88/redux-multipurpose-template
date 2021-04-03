import { select, call, delay, put, takeEvery, takeLatest, take, all,  } from 'redux-saga/effects';

import { store } from '@redux-multipurpose/core';

import { resetWsData, getExampleDataThunk } from './ws/ws.slice';
import { resetStorage } from './storage/storage.slice';
import { resetSecureStorage } from './secure-storage/secure-storage.slice';

function* resetAllData()
{
    yield takeEvery("resetAll", function* (action)
    {
        yield put(resetStorage());
        yield put(resetSecureStorage());
        yield put(resetWsData());
        yield call(store.dispatch, getExampleDataThunk(null));
    });
}

export default function* rootSaga()
{
    yield all([
    	resetAllData()
	]);
}