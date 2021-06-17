require('file-loader?name=[name].[ext]!./index.html');
import React from "react";
import ReactDOM from 'react-dom';
import {App} from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { CartProvider } from "react-use-cart";


const appElement = document.getElementById('root');

ReactDOM.render(
    <CartProvider>
        <App/>
    </CartProvider>,
        appElement
);

reportWebVitals();
