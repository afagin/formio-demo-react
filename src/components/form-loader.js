import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { Form } from "react-formio";
import { getForm } from "../api";

class FormLoader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: null
    };
  }

  componentDidMount() {
    const { url } = this.props;
    getForm(url).then(({ data }) => {
      this.setState({ form: data });
    });
  }

  render() {
    const { form } = this.state;
    const { handleSubmit } = this.props;

    return (
      <Form
        form={form}
        options={{
          noAlerts: true
        }}
        onSubmit={handleSubmit}
      />
    );
  }
}

FormLoader.propTypes = {
  url: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default FormLoader;
