import React from "react";
import { Redirect } from "react-router";
import { connect } from "react-redux";

const Authenticated = Component => {
  const WrappedComponent = ({ token, ...props }) => {
    return token ? <Component {...props} /> : <Redirect to="/" />;
  };

  const mapStateToProps = ({ token }) => ({ token });

  return connect(mapStateToProps)(WrappedComponent);
};

export default Authenticated;
