import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  invoice: "undefined",
};

export const invoiceDetailsSlice = createSlice({
  name: "invoiceDetails",
  initialState,
  reducers: {
    setInvoiceDetails: (state, action) => {
      state.invoice = action.payload;
    },
    resetInvoiceDetails(state) {
      state.invoice = undefined;
    },
  },
});

export const { setInvoiceDetails, resetInvoiceDetails } =
  invoiceDetailsSlice.actions;

export default invoiceDetailsSlice.reducer;
