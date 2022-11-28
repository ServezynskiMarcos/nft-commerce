import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import store from "./Redux/store";
import { Provider } from "react-redux";
import theme from "./theme";
import { BrowserRouter as Router } from "react-router-dom";
import { FirebaseAppProvider } from "reactfire";
import fireBaseConfig from "./fireBase-config";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <FirebaseAppProvider firebaseConfig={fireBaseConfig}>
          <App />
        </FirebaseAppProvider>
      </Provider>
    </ChakraProvider>
  </Router>
);
