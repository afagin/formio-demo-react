import React from "react";
import { connect } from "react-redux";
import { Router, Route } from "react-router-dom";
import CreateForm from "./components/create-form";
import LoginForm from "./components/login-form";
import RenderForm from "./components/render-form";
import EnterUrl from './components/enter-url';

import history from "./history";

const Routes = ({ tokenChecked }) =>
  tokenChecked ? (
    <div className="App">
      <Router history={history}>
        <Route path="/" exact component={LoginForm} />
        <Route path="/create" component={CreateForm} />
        <Route path="/render" component={RenderForm} />
        <Route path="/enter" component={EnterUrl} />
      </Router>
    </div>
  ) : (
    <div className="loading">Loading ...</div>
  );

const mapStateToProps = ({ tokenChecked }) => ({
  tokenChecked
});

export default connect(mapStateToProps)(Routes);
