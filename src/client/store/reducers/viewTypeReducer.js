import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    type : true //false: card view, true: table view
};

export const viewTypeSlice = createSlice({
  name: "viewTypeReducer",
  initialState,
  reducers: {
    setViewType: (state, action) => {
      state.type = action.payload;
    }
  },
});

export const {
    setViewType
} = viewTypeSlice.actions;

export default viewTypeSlice.reducer;