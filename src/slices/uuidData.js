import { createSlice } from '@reduxjs/toolkit';
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
      state.result = removeDuplicates(state.init, state.duplicates)
    },
    setDuplicates: (state, action) => {
      state.duplicates = getUuid(action.payload);
      state.result = removeDuplicates(state.init, state.duplicates)
    },
    setResult: (state) => {
      state.result = removeDuplicates(state.init, state.duplicates)
    },
  }
});

export const { setInit, setDuplicates, setResult } = uuidData.actions;
export default uuidData.reducer
