// src/app/ReduxProvider.js
"use client"; // This marks the file as a Client Component

import { Provider } from "react-redux";
import store from "./stores";

const ReduxProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
