import { configureStore } from "@reduxjs/toolkit";
import templateReducer from "./templateSelector";
import invoiceReducer from "./invoiceDetails";

const store = configureStore({
  reducer: {
    template: templateReducer,
    invoice: invoiceReducer,
  },
});

export default store;
