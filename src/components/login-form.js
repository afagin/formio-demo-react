import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../api";
import { setToken } from "../store/actions";
import FormLoader from "./form-loader";
import { PROJECT_URL } from "../api";

class LoginForm extends Component {
  handleSubmit = ({ data }) => {
    login({ data })
      .then(({ data, headers }) => {
        const { saveToken, history } = this.props;
        saveToken(headers["x-jwt-token"]);
        history.push("/create");
      })
      .catch(err => {
        console.log("login error", err);
      });
  };

  render() {
    return (
      <FormLoader
        url={`${PROJECT_URL}/user/login`}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  saveToken: token => dispatch(setToken(token))
});

export default connect(
  null,
  mapDispatchToProps
)(LoginForm);
