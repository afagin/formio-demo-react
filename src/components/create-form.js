import React, { useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import "brace";
import "brace/mode/json";
import "brace/theme/github";
import AceEditor from "react-ace";
import Authenticated from "./authenticated";
import { createForm, PROJECT_URL } from "../api";
import { setFormUrl } from "../store/actions";

const defaultJSON = `{
    "title": "Test form",
    "display": "form",
    "type": "form",
    "name": "test",
    "path": "abc/test",
    "components": [
        {
            "input": true,
            "inputType": "text",
            "label": "First Name",
            "key": "firstName",
            "placeholder": "",
            "defaultValue": "",
            "validate": {
                "required": false,
                "minLength": "",
                "maxLength": "",
                "pattern": "",
                "custom": "",
                "customPrivate": false
            },
            "type": "textfield"
        },
        {
            "input": true,
            "inputType": "text",
            "label": "Last Name",
            "key": "lastName",
            "placeholder": "",
            "defaultValue": "",
            "validate": {
                "required": false,
                "minLength": "",
                "maxLength": "",
                "pattern": "",
                "custom": "",
                "customPrivate": false
            },
            "type": "textfield"
        },
        {
            "input": true,
            "type": "email",
            "defaultValue": "",
            "placeholder": "Enter your email address",
            "key": "email",
            "label": "Email",
            "inputType": "email",
            "validate": {
              "required": true
            }
        },
        {
            "input": true,
            "type": "password",
            "placeholder": "Enter your password.",
            "label": "Password",
            "key": "password",
            "inputType": "password",
            "validate": {
              "required": true
            }
        },
        {
            "input": true,
            "label": "Submit",
            "key": "submit",
            "size": "md",
            "leftIcon": "",
            "rightIcon": "",
            "block": false,
            "action": "submit",
            "theme": "primary",
            "type": "button"
        }
    ]
}`;

const CreateForm = ({ saveFormUrl, history }) => {
  const [input, setInput] = useState(defaultJSON);

  return (
    <div className="create-form">
      <h1>Create a form</h1>
      <p className="helper-text">
        Please enter json to create form via Form.io API
      </p>
      <br />
      <AceEditor
        mode="json"
        theme="github"
        value={input}
        onChange={ev => setInput(ev)}
        name="form_input_json"
        editorProps={{ $blockScrolling: true }}
      />
      <br />
      <button
        type="button"
        className="btn btn-primary"
        onClick={e => {
          try {
            const data = JSON.parse(input);
            createForm(data).then(({ data }) => {
              saveFormUrl(`${PROJECT_URL}/${data.path}`);
              history.push("/render");
            });
          } catch (err) {
            console.log(err);
          }
        }}
      >
        Create
      </button>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  saveFormUrl: url => dispatch(setFormUrl(url))
});

export default compose(
  Authenticated,
  connect(
    null,
    mapDispatchToProps
  )
)(CreateForm);
