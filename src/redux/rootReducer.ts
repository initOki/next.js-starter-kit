import { combineReducers } from '@reduxjs/toolkit';

import commonReducer from './commonReducer';
import authReducer from './loginReducer';

const rootReducer = combineReducers({
  common: commonReducer,
  auth: authReducer
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;
