import {
  BrowserRouter as Router,
  Route,

} from "react-router-dom";
import React from "react";
import IndexPage from "./pages/Index.jsx";
import BeatsPage from "./pages/BeatsPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import UploadPage from "./pages/UploadPage.jsx";
import BeatDetailPage from "./pages/beat-detail.jsx";

export function App () {
    return (
        <Router>
          <Route exact path="/" component={IndexPage}/>
          <Route exact path="/wavegod" component={UploadPage}/>
          <Route exact path="/contact" component={ContactPage}/>
          <Route exact path="/beats" component={BeatsPage}/>
          <Route exact path="/beat/:id" component={BeatDetailPage}/>
          <Route exact path="/cart" component={CartPage}/>
          <Route exact path="/checkout" component={IndexPage}/>
        </Router>
    );
}
