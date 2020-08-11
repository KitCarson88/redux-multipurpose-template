import { createStoredReducer, createSecureStoredReducer } from '@redux-multipurpose/core';

import { wsReducer } from './ws/ws.slice';
import { splashReducer } from './splash/splash.slice';

export function rootReducer(storage)
{
  return {
    ws: wsReducer,
		splash: splashReducer
  };
}

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;