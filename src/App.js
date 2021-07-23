
import {
    BrowserRouter as Router,
    Route, Switch,

} from "react-router-dom";
import React, {Component} from "react";
import IndexPage from "./pages/Index";
import BeatsPage from "./pages/BeatsPage";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";
import UploadPage from "./pages/UploadPage";
import BeatDetailPage from "./pages/BeatDetail";
import SoundKitPage from "./pages/SoundKitPage";

class App extends Component {
  render() {
    return (
        <Router>
          <Route exact path="/" component={IndexPage}/>
          <Route exact path="/wavegod" component={UploadPage}/>
          <Route exact path="/contact" component={ContactPage}/>
          <Route exact path="/beats" component={BeatsPage}/>
          <Route exact path="/soundkits" component={SoundKitPage}/>
          <Switch>
              <Route path="/beat/:title" component={BeatDetailPage}/>
          </Switch>
          <Route exact path="/cart" component={CartPage}/>
          <Route exact path="/checkout" component={IndexPage}/>
        </Router>
    );
  }
}

export default App;
