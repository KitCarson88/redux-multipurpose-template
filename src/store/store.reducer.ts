import { createStoredReducer, createSecureStoredReducer } from '@redux-multipurpose/core';

import { wsReducer } from './ws/ws.slice';
import { storageReducer } from './storage/storage.slice';

export function rootReducer(storage)
{
  return {
    ws: wsReducer,
		storage: storageReducer
  };
}

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;