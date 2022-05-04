import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  templateId: 0,
};

export const templateSelectorSlice = createSlice({
  name: "templateSelector",
  initialState,
  reducers: {
    selectTemplate: (state, action) => {
      state.templateId = action.payload;
    },
    resetTemplate: (state) => {
      state.templateId = 0;
    },
  },
});

export const { selectTemplate, resetTemplate } = templateSelectorSlice.actions;

export default templateSelectorSlice.reducer;
