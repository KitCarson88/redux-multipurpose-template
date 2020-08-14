import { createStoredReducer, createSecureStoredReducer } from '@redux-multipurpose/core';

import { wsReducer } from './ws/ws.slice';
import { storageReducer } from './storage/storage.slice';
import { secureStorageReducer } from './secure-storage/secure-storage.slice';

export function rootReducer(storageSystem)
{
  const secureStorageSecurePersistedReducer = createSecureStoredReducer('secureStorage', '0xjw4y5xhcmlsk8lc5bo27', storageSystem, secureStorageReducer);

	const storagePersistedReducer = createStoredReducer('storage', storageSystem, storageReducer);

	return {
    ws: wsReducer,
		storage: storagePersistedReducer,
		secureStorage: secureStorageSecurePersistedReducer
  };
}

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;