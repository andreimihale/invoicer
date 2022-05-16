/* eslint-disable no-console */
import { createSlice } from "@reduxjs/toolkit";
import validator from "validator";
import UploadLogo from "../static/Uplaod_Logo.svg";

const initialState = {
  invoice: {
    logo: UploadLogo,
    fileUploaded: false,
    from: {
      phoneNumberError: false,
    },
    to: {},
    vatError: false,
  },
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
    setLogo: (state, action) => {
      state.invoice.logo = action.payload;
      state.invoice.fileUploaded = true;
    },
    setInvoiceNumber: (state, action) => {
      state.invoice.invoiceNumber = action.payload;
    },
    setInvoiceFrom: (state, action) => {
      state.invoice.from[action.payload.field] = action.payload.value;
      if (action.payload.field === "phoneNumber") {
        if (!validator.isMobilePhone(action.payload.value)) {
          state.invoice.from.phoneNumberError = true;
        } else {
          state.invoice.from.phoneNumberError = false;
        }
      }
    },
    setInvoiceTo: (state, action) => {
      state.invoice.to[action.payload.field] = action.payload.value;
    },
    setVat: (state, action) => {
      state.invoice.vat = action.payload;
      if (!validator.isNumeric(action.payload)) {
        state.invoice.vatError = true;
      } else {
        state.invoice.vatError = false;
      }
    },
  },
});

export const {
  setInvoiceDetails,
  resetInvoiceDetails,
  setLogo,
  setInvoiceNumber,
  setInvoiceFrom,
  setInvoiceTo,
  setVat,
} = invoiceDetailsSlice.actions;

export default invoiceDetailsSlice.reducer;
