import { createSlice } from '@reduxjs/toolkit';

import { login } from './actions/loginAction';

const initialState = {
  data: '',
  failed: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    // Login
    [login.fulfilled.type]: (state, action) => {
      // 호출 성공
      state.data = action.payload.data
    },
    [login.rejected.type]: (state, action) => {
      // 호출 실패
      state.data = ''
    },
  },
});

// export const { } = authSlice.actions;

export default authSlice.reducer;
