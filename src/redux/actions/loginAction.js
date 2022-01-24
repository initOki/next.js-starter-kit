import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setLoading } from '../commonReducer';

const authType = 'auth';

// const requestData = {
//   EMAIL_ID: email,
//   PASSWORD: password,
//   PLATFORM: 'WEB',
// };

export const login = createAsyncThunk(
  `${authType}/login`,
  async (request, { dispatch }) => {
    console.log(request)
    dispatch(setLoading());
    try {
      const response = await axios({
        url: 'https://api.github.com/users/' + request,
        method: 'get',
        // data: requestData,
      });

      dispatch(setLoading());
      return response;

    } catch (error) {
      dispatch(setLoading());
      alert('조회 실패');
      return error;
    }
  },
);
