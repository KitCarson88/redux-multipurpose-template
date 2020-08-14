import { createStoredReducer, createSecureStoredReducer } from '@redux-multipurpose/core';

import { wsReducer } from './ws/ws.slice';
import { storageReducer } from './storage/storage.slice';
import { secureStorageReducer } from './secure-storage/secure-storage.slice';

export function rootReducer(storage)
{
  return {
    ws: wsReducer,
		storage: storageReducer,
		secureStorage: secureStorageReducer
  };
}

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;