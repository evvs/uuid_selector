import { createSlice }  from '@reduxjs/toolkit';
import { getUuid, removeDuplicates } from '../utils';

const uuidData = createSlice({
  name: 'uuidData',
  initialState: {
    init: [],
    duplicates: [],
    result: [],
  },
  reducers: {
    setInit: (state, action) => {
      state.init = getUuid(action.payload);
    },
    setDuplicates: (state, action) => {
      state.duplicates = getUuid(action.payload);
    },
    setResult: (state) => {
      state.result = removeDuplicates(state.init, state.duplicates)
    },
  }
});

export const { setInit, setDuplicates, setResult } = uuidData.actions;
export default uuidData.reducer
