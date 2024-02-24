import { createSlice, current } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    // "iphone": ["iphone 11", "iphone15"],
  },
  reducers: {
    cacheResults: (state, action) => {
      return {...state, ...action.payload};
      //below line combines/merges both properties of action.payload and state and assigns it to state
      // state = Object.assign(state, action.payload);
    },
  },
});

export default searchSlice.reducer;
export const { cacheResults } = searchSlice.actions;
