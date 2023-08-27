import React from "react";
// import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";

import { store } from "../store/store";

import Home from "./home";

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
