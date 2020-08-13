import { createStoredReducer, createSecureStoredReducer } from '@redux-multipurpose/core';

import { wsReducer } from './ws/ws.slice';

export function rootReducer(storage)
{
  return {
    ws: wsReducer
  };
}

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;