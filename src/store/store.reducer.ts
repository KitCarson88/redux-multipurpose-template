import { createStoredReducer, createSecureStoredReducer } from '@redux-multipurpose/core';

import { wsReducer } from './ws/ws.slice';

export function rootReducer(storage)
{
  //Persisted reducers: PLEASE DON'T DELETE THIS PLACEHOLDER
  
  return {
		ws: wsReducer,
    //Reducers: PLEASE DON'T DELETE THIS PLACEHOLDER
  };
}

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;