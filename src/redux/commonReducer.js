import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  isOpen: false,
};

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setLoading: (state) => {
      state.isLoading = !state.isLoading;
      console.log('isLoading', state.isLoading);
    },
    setModal: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const {
  setLoading,
  setModal,
} = commonSlice.actions;

export default commonSlice.reducer;
