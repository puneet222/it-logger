import React, { useState } from "react";
import { addLog } from "../../action/logAction";
import { connect } from "react-redux";
import M from "materialize-css/dist/js/materialize.min.js";
import PropTypes from "prop-types";

const AddLogModal = ({ addLog }) => {
  const [message, setMessage] = useState("");
  const [tech, setTech] = useState("");
  const [attention, setAttention] = useState(false);

  const clearForm = () => {
    setMessage("");
    setTech("");
    setAttention(false);
  };

  const onSubmit = e => {
    if (message === "" || tech === "") {
      M.toast({
        html: "Please fill the fields",
        classes: "rounded"
      });
      return;
    }
    addLog({
      message,
      tech,
      attention
    });
    M.toast({
      html: `Log Added by ${tech}`
    });
    clearForm();
  };

  return (
    <div id="add-log-modal" className="modal">
      <div className="modal-content">
        <h5 className="center">Add Log</h5>
        <div className="input-field">
          <input
            value={message}
            type="text"
            name="message"
            placeholder="Message"
            onChange={e => setMessage(e.target.value)}
          />
          <label htmlFor="message">Message</label>
        </div>
        <div className="input-field">
          <select value={tech} onChange={e => setTech(e.target.value)}>
            <option value="" disabled>
              Select Tech
            </option>
            <option value="Puneet Aggarwal">Puneet Aggarwal</option>
            <option value="Harish Saini">Harish Saini</option>
          </select>
        </div>
        <label>
          <input
            type="checkbox"
            className="filled-in"
            value={attention}
            checked={attention}
            onChange={e => setAttention(!attention)}
          />
          <span>Attention</span>
        </label>
      </div>
      <div className="modal-footer">
        <div className="secondary-content">
          <a className="waves-effect blue waves-light btn" onClick={onSubmit}>
            Enter
          </a>
        </div>
      </div>
    </div>
  );
};

AddLogModal.propTypes = {
  addLog: PropTypes.func.isRequired
};

export default connect(
  null,
  { addLog }
)(AddLogModal);
