import React, { useState } from "react";
import { connect } from "react-redux";
import { PROJECT_URL } from "../api";
import { setFormUrl } from "../store/actions";

const EnterUrl = ({ setUrl, history }) => {
  const [path, setPath] = useState("");

  return (
    <div className="enter-url">
      <div className="form-group">
        <span>{PROJECT_URL}/</span>
        <input
          type="text"
          value={path}
          onChange={ev => setPath(ev.target.value)}
        />
      </div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          setUrl(path);
          history.push("/render");
        }}
      >
        Show
      </button>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  setUrl: path => dispatch(setFormUrl(`${PROJECT_URL}/${path}`))
});

export default connect(
  null,
  mapDispatchToProps
)(EnterUrl);
