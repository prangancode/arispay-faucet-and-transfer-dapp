import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HowItWorks from "./components/HowItWorks.js";
import TokenRequest from "./components/TokenRequest.js";
import TransactionERC from "./components/TransactionERC.js";
// import TransactionManager from "./components/TransactionManager.js";
import Wallet from "./components/Wallet.js";
import Footer from "./layout/footer/Footer.js";
import Header from "./layout/header/Header.js";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Wallet} />
        <Route exact path="/transaction" component={TransactionERC} />
        <Route exact path="/token-request" component={TokenRequest} />
        <Route exact path="/how-it-works" component={HowItWorks} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
