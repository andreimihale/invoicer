import { configureStore } from "@reduxjs/toolkit";
import templateReducer from "./templateSelector";

const store = configureStore({
  reducer: {
    template: templateReducer,
  },
});

export default store;
