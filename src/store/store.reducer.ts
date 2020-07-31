import { createStoredReducer } from '@redux-multipurpose/core';

import { wsReducer } from './ws/ws.reducer.ts';

export function rootReducer(storage)
{
  return {
		ws: wsReducer,
    //Reducers: PLEASE DON'T DELETE THIS PLACEHOLDER
  };
}

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;