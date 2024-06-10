import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
// import { PersistGate } from "redux-persist/integration/react";
import { Elements } from "@stripe/react-stripe-js";
//  FOR REDUX
import { Provider } from "react-redux";
// import { store, persistor } from "./store/store";
import { store } from "./store/store";
import { stripePromise } from "./utils/stripe/stripe.utils";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/*<PersistGate loading={null} persistor={persistor}>*/}
      <BrowserRouter>
        <Elements stripe={stripePromise}>
          <App />
        </Elements>
      </BrowserRouter>
      {/*</PersistGate>*/}
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
