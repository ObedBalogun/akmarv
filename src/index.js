import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Routes} from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { CartProvider } from "react-use-cart";
ReactDOM.render(
    <React.StrictMode>
        <CartProvider>{<Routes />}</CartProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
