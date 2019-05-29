import React, { Component } from "react";
import { connect } from "react-redux";
import FormLoader from "./form-loader";
import { submitForm } from "../api";

class RenderForm extends Component {
  handleSubmit = ({ data }) => {
    console.log(data);
    submitForm(data).then(({ data: responseData }) => {
      console.log("data returned from the api", responseData);
    });
  };

  render() {
    const { formUrl } = this.props;

    return (
      <div className="form-renderer">
        <FormLoader url={formUrl} handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

const mapStateToProps = ({ formUrl }) => ({
  formUrl
});

export default connect(mapStateToProps)(RenderForm);
