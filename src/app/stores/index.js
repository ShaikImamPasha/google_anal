import { configureStore } from "@reduxjs/toolkit";
// import {
//   createStateSyncMiddleware,
//   initMessageListener,
// } from "redux-state-sync";
import countReducer from "../slices/countSlice.js";

const store = configureStore({
  reducer: {
    count: countReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(createStateSyncMiddleware({})),
});

// initMessageListener(store);
export default store;