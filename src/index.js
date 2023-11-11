import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';








import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from './features/userReducer';
import popUpReducer from './features/popUpReducer';
import { Helmet } from 'react-helmet';





export const store = configureStore({
  reducer: {
    user: userReducer,
    popUp: popUpReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Provider store={store}>

      <Helmet>
        <title>My Page Title</title>
        <meta name="cryptomus" content="5d8e6a03" />
      </Helmet>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
